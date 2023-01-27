//IMPORTAMOS MODULO EXPRESS
const express = require("express")
const {request, response} = require("express");
//CREAR UNA APLICACION EXPRESS
const app = express()

const PORT = 3001
app.listen(PORT, ()=>{
    console.log("\x1b[41m%s\x1b[0m", `Servidor escuchando en puerto ${PORT}`);
})


// Tenemos que definir un punto de entrada para cuando se pide la raíz, es decir, "/".
// - Cuando solicitan "/" -> Devolver index.html
app.get('/', (request, response) => {
    response.sendFile('index.html', {root: 'html'})
})
app.get('/logica.js', (request, response) => {
    response.sendFile('logica.js', {root: 'js'})
})
app.get('/styles.css', (request, response) => {
    response.sendFile('styles.css', {root: 'css'})
})


//datos personaje
app.get('/datos/personajes.json', (request, response) => {
    response.sendFile('personajes_es.json', {root: 'data'})
})


//logo
app.get('/images/logo/logo_vector.svg', (request, response) => {
    response.sendFile('logo_vector.svg', {root: 'images/logo'})
})


//Fotos
app.get('/sprites/campeonesMD/:personaje', (request, response) => {
    let nombre = request.params.personaje
    //Elimino comillas y espacios,pongo la palabra entera en minuscula y luego la primera en mayuscula
    nombre = nombre.replace(/\s/g, '')
    nombre = nombre.replace(/["']/g, "")
    nombre = nombre.toLowerCase()
    nombre = nombre[0].toUpperCase()+nombre.slice(1)
    //Le he cambiado el nombre a varias imagenes, menos las de renata y zeri, porque no las encuentro.

    response.sendFile(nombre+'.jpg', {root: 'images/campeonesMD'})
})

app.get('/sounds/jokes/:nombre', (request, response) => {
    let nombre = request.params.nombre
    nombre = nombre.replace(/\s/g, '')
    nombre = nombre.replace(/["']/g, "")
    nombre = nombre.toLowerCase()
    nombre = nombre[0].toUpperCase()+nombre.slice(1)

    //Algunos personajes no pone el nombre del personaje en el audio,por lo que da error y no les puedo
    //cambiar el nombre porque no soy capaz de tetectar cual es su sonido.

    response.sendFile(nombre, {root: 'sounds/jokes'})
})


app.get('/sounds/laugh/:nombre', (request, response) => {
    let nombre = request.params.nombre
    nombre = nombre.replace(/\s/g, '')
    nombre = nombre.replace(/["']/g, "")
    nombre = nombre.toLowerCase()
    nombre = nombre[0].toUpperCase()+nombre.slice(1)


    //Algunos personajes no pone el nombre del personaje en el audio,por lo que da error y no les puedo
    //cambiar el nombre porque no soy capaz de tetectar cual es su sonido.

    response.sendFile(nombre, {root: 'sounds/laugh'})
})

app.get('/favicon.ico', (request, response) => {
    response.sendFile('favicon.ico', {root: 'images/logo'})
})