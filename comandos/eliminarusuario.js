exports.run = async (client, message, args) => {

  const usuarios_db = new megadb.crearDB("usuarios")
  let sujeto = message.mentions.users.first()
  if(!usuarios_db.tiene(`${sujeto.id}`)) return message.reply("ese usuario no esta en la lista.") //Si el usuario no esta en la lista manda el mensaje y no sucede nada.
  usuarios_db.eliminar(`${sujeto.id}`)//Se elimina el usuario de la lista.
  return message.channel.send(sujeto+" ha sido eliminado de la lista.");

};
