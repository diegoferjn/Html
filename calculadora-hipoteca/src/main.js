// src/main.js
// Punto de entrada
console.log("App OK — Tipos II (undefined/null)");

/*
  Variables del enunciado anterior (solo por contexto)
  y para probar OR (||) con defaults.
*/
let precioVivienda = 0;
let porcentajeFinanciacion = 80; // default si no viene
let isFavorite = false;

// Referencia al formulario
let form = document.getElementById("calc-form");

if (form) {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const formData = new FormData(form);

    // 1) MANEJAR VALORES OPCIONALES con OR (||)
    // Obtener valores del usuario (string o null si el campo no existe)
    const vPrecio = formData.get("precio");
    const vPlazo = formData.get("plazo");
    const vPorcentaje = formData.get("porcentaje");
    const vInteres = formData.get("interes");
    const vFecha = formData.get("fecha");

    // Campo que NO existe para mostrar 'null' de forma clara
    const campoInexistente = formData.get("comentario"); // -> null

    // Mostrar si algo es undefined o null
    // (FormData.get retorna null si no existe; undefined lo mostramos con una variable explícita)
    let algoIndefinido; // undefined
    if (typeof algoIndefinido === "undefined") {
      console.log("algoIndefinido es 'undefined'");
    }
    if (campoInexistente === null) {
      console.log("campoInexistente es 'null' (no existe en el form)");
    }

    // Convertir a número cuando toque
    const numPrecio = vPrecio != null ? parseFloat(vPrecio) : undefined;
    const numPlazo = vPlazo != null ? parseFloat(vPlazo) : undefined;
    const numPorcentaje = vPorcentaje != null ? parseFloat(vPorcentaje) : undefined;
    const numInteres = vInteres != null ? parseFloat(vInteres) : undefined;

    console.log("Valores crudos:", { vPrecio, vPlazo, vPorcentaje, vInteres, vFecha });

    // 2) ARRAY DE ERRORES
    const errors = [];
    if (!vPrecio) errors.push("Precio es requerido");
    if (!vPlazo) errors.push("Plazo es requerido");
    console.log("errors:", errors);

    // 3) VALORES POR DEFECTO con OR (||)
    // Si no hay fecha, usamos mes actual ISO "YYYY-MM"
    const fechaActualMes = new Date().toISOString().slice(0, 7);
    const fechaInicio = vFecha || fechaActualMes;

    // Si no hay porcentaje, 80 por defecto
    const porcentajeFinal = (isNaN(numPorcentaje) ? undefined : numPorcentaje) || 80;

    console.log("fechaInicio (final):", fechaInicio);
    console.log("porcentajeFinanciacion (final):", porcentajeFinal);

    // 4) MANEJAR undefined / null
    let valorIndefinido = undefined;
    let valorNulo = null;

    console.log("valorIndefinido:", valorIndefinido); // undefined
    console.log("valorNulo:", valorNulo);             // null

    // OR para valor seguro (si valorIndefinido es undefined, usar "por defecto")
    let valorSeguro = valorIndefinido || "por defecto";
    console.log("valorSeguro:", valorSeguro);

    // (Solo feedback en consola para esta práctica)
    console.log("Resumen numérico:", { numPrecio, numPlazo, numPorcentaje, numInteres });
  });
}
