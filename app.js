// Creación del arreglo
let amigos = [];

// Función para agregar un nombre
function agregarAmigo() {
    let entrada_Nombre = document.getElementById('amigo');
    let nombre = entrada_Nombre.value.trim();

    if (nombre === '') {
        alert('Ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre);
    entrada_Nombre.value = '';
    actualizar();
}

// Función para actualizar la lista visual
function actualizar() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((nombre) => {
        let item = document.createElement('li');
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

// Función para sortear al amigo
function sorteo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Prueba agregar uno.');
        return;
    }

    let i = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[i];
    alert(`Amigo/a sorteado: ${elegido}`);
}

// Escuchar la tecla Enter en el input
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('amigo');
    
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Previene envío de formularios
            agregarAmigo(); // Llama la función como si se presionara el botón
        }
    });
});
