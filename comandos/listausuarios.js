exports.run = async (client, message, args) => {

const usuarios_db = new megadb.crearDB("usuarios") //Requerimos la misma database que hemos creado.

    if(usuarios_db.size() < 1) return message.channel.send('No hay usuarios en la lista.');//Si no hay usuarios en la db esto envia una mensaje.
    
    //Ahora la palabra 'key' es el nombre principal del JSON ej:
    //Este seria la database en JSON
    //{
  //"473901560179589120": { //Esto es key siempre, los demas subdatos son v = valor, si requerimos uno ponemos 'v.discord_nombre' porque le pusimos 'discord_nombre'
    //"discord_nombre": "sergiodiscord#1032",
    //"discord_servidor": "Sergio's Project"
  //}
//}
    //Comemzamos con la busqueda de la lista
    usuarios_db.map(false, (v, key) => `Usuario ID: ${key}\nNombre: ${v.discord_nombre}\nServidor: ${v.discord_servidor}`).then(lista_usuarios => {
      return message.channel.send(lista_usuarios.join("\n"))
      
      //Esto hara que separe cada usuario con la siguiente linea, para que no se acomulen.
    }) 
    
};
