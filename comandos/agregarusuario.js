exports.run = async (client, message, args) => {
 const megadb = require('megadb')
 const Discord = require('discord.js')
 
 //Usamos el constructor crearDB para la database
 let usuarios_db = megadb.crearDB("usuarios")//El archivo se creara en mega_databases/usuarios.json
 
 let sujeto = message.mentions.users.first(); //Declaramos el usuario mencionado

		if (usuarios_db.tiene(`${sujeto.id}`))
			return message.reply(`${sujeto} ya esta agregado a la lista.`);
		usuarios_db.establecer(`${sujeto.id}`, {
    nombre_discord
    });
		message.channel.send(embed.setDescription('<@' + sujeto.id + '> ha sido agregado al staff.'));
		sujeto.send(
			embed.setDescription(
				message.author +
					' te ha agregado como staff para el bot.\n - Usa los comandos adecuadamente.'
			)
		);


}
