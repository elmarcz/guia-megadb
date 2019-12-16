const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = {
"token": "La token de tu bot",
"prefix": "tu prefix"
};


const megadb = require('megadb')
const fs = require('fs')





//Este es un Handler Command basico, no tiene revelancia al codigo puedes usar el tuyo propio.
client.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
   
    let props = require(`./comandos/${file}`);
   
    let commandName = file.split(".")[0];
    console.log(`Comando cargado: ${commandName}`);
   
    client.commands.set(commandName, props);
  });
});


//Aqui se ven los eventos utilizados, aunque no tienen revelancia al codigo de la db.
client.on('ready', () => {
  client.user.setActivity("Usando MegaDB :)", {url: "https://www.twitch.tv"});
  console.log(`Estoy listo!`);
});

client.on('message', async message=> {
//Este contenido es para el handler. ES IMPRESCINDIBLE SI LO VAS A USAR!!
  if (message.author.bot) return;
    if (message.content.indexOf(tokens.prefix) !== 0) return;
    const args = message.content.slice(tokens.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
    if (!cmd) return message.reply("error al introducir el comando...");
    cmd.run(client, message, args);


});

})



client.login(tokens.token);
