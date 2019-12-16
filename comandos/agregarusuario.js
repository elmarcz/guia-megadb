exports.run = async (client, message, args) => {
 const megadb = require('megadb')
 const Discord = require('discord.js')
 
 //Usamos el constructor crearDB para la database
 let usuarios_db = megadb.crearDB("usuarios")//El archivo se creara en mega_databases/usuarios.json
 
 let sujeto = message.mentions.users.first(); //Declaramos el usuario mencionado

		if (usuarios_db.tiene(`${sujeto.id}`))
			return message.reply(`${sujeto} ya esta agregado a la lista.`);
		usuarios_db.establecer(`${sujeto.id}`, {
    		nombre_discord: sujeto.tag, //ej. sergiodiscord#1032
		nombre_servidor: message.guild.name //ej. Sergio's projects	
    			});
		message.channel.send('<@' + sujeto.id + '> ha sido agregado a la lista.');


};
