// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

function agregarAmigo () {
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);

    if (nombreAmigo === '') {
        alert('Ingresa un nombre');
        return;
    }

    Amigos.push(nombreAmigo);
    limpiarCaja();
    visualizarAmigos();
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
    return;
}

function visualizarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < Amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = Amigos[i];
        listaAmigos.appendChild(item);
    }
   
}

function sortearAmigo() {

    if (!Amigos.length) {
        alert('No hay amigos para sortear, agrega amigos');
        return;
    }

    let amigoSorteado = Amigos[Math.floor(Math.random() * Amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
}