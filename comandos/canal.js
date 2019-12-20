exports.run = async (client, message, args) => {

const megadb =  require('megadb')
const Discord = require('discord.js')
//  Creamos la database con el constructor

let canal_db = new megadb.crearDB('canal_db')

if(args[0] === 'canal') { //    Vamos a establecer el canal cual vamos a ejecutar el comando del mensaje.

let channel = message.mentions.channels.first();

if (!channel)
return message.reply('deberias de nombrar el canal, ej: `#canal`') //   Si el canal no esta seleccionado, responde asi.

const existe_canal = message.guild.channels.find(r => r.id === channel.id); //  Aqui estamos revisando el canal si existe

if (!existe_canal) return message.reply('el canal no existe...'); // Si el canal que se guardo no existe, responde.

canal_db.establecer(`${message.guild.id}`, channel.id); //  Aqui guardamos el canal seleccionado junto a la ID del servidor cual se ha ejecutado
message.channel.send('El canal se ha establecido a <#'+ channel.id+'>');

};

if(args[0] === 'probar') { // Se puede probar el mensaje que ponemos en el canal que establecimos
    //  Esto lo puedes usar donde quieras como un canal de logs o de sanciones o de bienvenidas.

    if (!canal_db.tiene(`${message.guild.id}`)) return; // Requerimos si la id del canal esta junto a la del servidor
    let canal = await canal_db.obtener(`${message.guild.id}`);

    let canal_guardado = client.channels.get(canal) // Estamos obteniendo el canal seleccionado de la database
    if(!canal_guardado) return;
    canal_guardado.send('Hola, este canal ha sido guardado y estoy enviando mensaje solo aqui con el comando.') 
};

}
