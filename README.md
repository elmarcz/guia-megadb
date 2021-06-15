# Guia de megaDB 

### 📖 Topicos

> [Agregar, ver y eliminar usuarios de una lista.](comandos/usuario.js)

> [Establecer canal y enviar un mensaje solo a ese canal](comandos/canal.js)

### ⁉ ¿Que es megadb?
> ;egadb es una database JSON facil de usar y comprender, y lo mas importante esque esta en **ESPAÑOL**. (Lo cual facilita mucho las cosas.)

> [npm megadb](https://www.npmjs.com/package/megadb)

### ‼ Importante
> Por defecto se creará una carpeta llamada mega_databases en la carpeta principal de tu proyecto (no se puede cambiar el nombre de esta carpeta, pero si añadir subcarpetas desde el constructor) crearDB. No borres dicha carpeta a menos que quieras borrar absolutamente todas tus base de datos.
```
../mega_databases/database_de_nombres.json

../mega_databases/sub_carpeta/database_de_nombres.json
```
## 📦 Instalacion
```
npm install megadb
```
#### ⚒ Constructores
```js
const megadb = require('megadb')

megadb.crearDB("nombre_de_la_db")

megadb.crearDB("nombre_de_la_db", "nombre_de_la_subcarpeta")
```
## Metodos
```
establecer
size
obtener
tiene
eliminar
datos
push
extract
sumar
restar
keys
values
purgeall
ordenar
random
existeDB
find
filter
map
some
setIndex
delIndex
convert_megadtbs
```
## Guia realizada por Sergio.
> Discord tag: twenifive#1111

> [Discord Server](https://discord.gg/tCYAPYbK3x)

> Si desea tener un soporte mas especifico, o incluso si desea incluir algo o proporcionar una idea contacteme.
