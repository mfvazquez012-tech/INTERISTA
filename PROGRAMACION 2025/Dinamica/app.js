/ ======= GALERÍA DINÁMICA (carpeta IMG) =======

// 1. Chicos: seleccionamos los elementos
const inputNombre = document.getElementById("nombreImg");
const btnAgregar = document.getElementById("btnAgregar");
const galeria = document.getElementById("galeria");

// 2. Detectar clic en el botón
btnAgregar.addEventListener("click", () => {
  // Tomamos el nombre del archivo que escribió el usuario
  const nombreArchivo = inputNombre.value.trim();

  // Validamos si escribió algo
  if (nombreArchivo === "") {
    alert("⚠️ Escribe el nombre del archivo, por ejemplo: foto1.jpg");
    return;
  }

  // 3. Creamos la ruta completa (carpeta img/)
  const ruta = `img/${nombreArchivo}`;

  // 4. Creamos un nuevo div.col y un elemento <img>
  const col = document.createElement("div");
  col.className = "col-6 col-md-4 col-lg-3";

  const img = document.createElement("img");
  img.src = ruta;
  img.alt = nombreArchivo;

  // 5. Insertamos la imagen en la galería
  col.appendChild(img);
  galeria.appendChild(col);

  // 6. Limpiamos el campo
  inputNombre.value = "";

  // 7. Mostramos en consola
  console.log("🖼️ Imagen agregada desde:", ruta);
});