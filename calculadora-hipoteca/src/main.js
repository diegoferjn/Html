// src/main.js
// 1) Mensaje de inicio (para verificar que el script carga)
console.log("Aplicación iniciada: Calculadora hipoteca");

// 2) Variables iniciales solicitadas
let precioVivienda = 0;
let porcentajeFinanciacion = 80;
let isFavorite = false;

console.log("Estado inicial -> precioVivienda:", precioVivienda);
console.log("Estado inicial -> porcentajeFinanciacion:", porcentajeFinanciacion);
console.log("Estado inicial -> isFavorite:", isFavorite);

// 3) Referencia al formulario
let form = document.getElementById("calc-form");

// 4) Escuchar submit y obtener valores con FormData + parseFloat
if (form) {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const formData = new FormData(form);

    const precio = parseFloat(formData.get("precio"));
    const porcentaje = parseFloat(formData.get("porcentaje"));
    const plazo = parseFloat(formData.get("plazo"));
    const interes = parseFloat(formData.get("interes"));
    const fecha = formData.get("fecha"); // string (ej. "2025-10")

    console.log("Valores del formulario:");
    console.log("precio (number):", precio);
    console.log("porcentaje (number):", porcentaje);
    console.log("plazo (number):", plazo);
    console.log("interes (number):", interes);
    console.log("fecha (string):", fecha);
  });
}

// 5) Trabajo con valores primitivos (string, boolean, number)
let nombre = "Mi escenario";
let esFavorito = false;
let precio = 200000;

console.log("nombre (string):", nombre);
console.log("esFavorito (boolean):", esFavorito);
console.log("precio (number):", precio);

// Convertir number -> string
let precioComoTexto = precio.toString();
console.log("precio como string:", precioComoTexto);
