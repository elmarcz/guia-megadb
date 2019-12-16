const Discord = require('discord.js'); //npm i discord.js --save para tener la libreria de discord.js
const client = new Discord.Client(); // Creamos el client
const tokens = {
"token": "La token de tu bot",
"prefix": "tu prefix"
}; //Puedes usar un archivo externo './config.json' por ejemplo y exportar tus archivos


const megadb = require('megadb') // La database en JSON que vamos a aprender
const fs = require('fs') // npm i fs --save fs se usa para leer archivos para el handler





//Este es un Handler Command basico, no tiene revelancia al codigo puedes usar el tuyo propio.

// El handler es una opcion, tambien se puede usar con switch(args[0]) {
// case 'comando':
// codigo
// break;
// } o if(command === 'comando') {
//codigo
//} // Todo esto en el evento mensaje si lo deseas usar
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
    if (!cmd) return message.reply("error al introducir el comando..."); // Si e comando introducido no existe retorna al mensaje y no se ejecuta nada.
    cmd.run(client, message, args);


});

})



client.login(tokens.token);
