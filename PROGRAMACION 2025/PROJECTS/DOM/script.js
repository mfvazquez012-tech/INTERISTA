let botonTexto = document.getElementById("cambiarTexto");
let titulo = document.getElementById("cambiarTexto"); // corregido getElementByd → getElementById

botonTexto.addEventListener("click", function() { // corregido fuction() → function()
    titulo.textContent = "Texto cambiado!"; // corregido 'título' → 'titulo'
});

let botonColor = document.getElementById("cambiarColor");
let cajas = document.getElementsByClassName("caja"); // corregido getElementByClassName → getElementsByClassName

botonColor.addEventListener("click", function() { // corregido function()
    for (let i = 0; i < cajas.length; i++)
        cajas[i].style.backgroundColor = "hsl(16, 70%, 64%)"; // color salmón de la paleta
});

let primeraCaja = document.querySelector(".caja");
primeraCaja.style.backgroundColor = "hsl(158, 35%, 52%)"; // verde menta

let todasLasCajas = document.querySelectorAll(".caja");
todasLasCajas.forEach(caja => {
    // Aquí puedes agregar acciones si quieres
});
