// =========================
// 1) Crear estructura de datos completa
// =========================

// Objeto de entrada (inputs)
const inputs = {
  precioVivienda: 0,
  porcentajeFinanciacion: 80,
  principal: 0,              // capital a financiar
  plazoAnios: 30,
  interesNominalAnual: 3.0,
  fechaInicioISO: ""         // la rellenaremos abajo con Date -> ISO
};

// Objeto de resultados (results)
const results = {
  cuota: 0,
  interesesTotales: 0,
  costeTotal: 0,
  fechaFinISO: ""            // la rellenaremos abajo con Date -> ISO
};

// Array de tabla de amortización (schedule)
let schedule = [];

// Escenario que agrupa todo
const scenario = { inputs, results, schedule };

console.log("Escenario inicial:", scenario);

// =========================
// 2) Manejar fechas con Date
// =========================

// Fecha de inicio = ahora
const fechaInicio = new Date();

// Fecha de fin = 30 años después
const fechaFin = new Date(fechaInicio);
fechaFin.setFullYear(fechaFin.getFullYear() + 30);

// Convertimos fechaInicio a ISO (aaaa-mm-ddTHH:mm:ss.sssZ)
const fechaInicioISO = fechaInicio.toISOString();

// Guardamos en la estructura de entradas
scenario.inputs.fechaInicioISO = fechaInicioISO;

// También guardamos la fecha fin en resultados, en ISO
scenario.results.fechaFinISO = fechaFin.toISOString();

console.log("Fecha inicio (objeto Date):", fechaInicio);
console.log("Fecha fin (+30 años):", fechaFin);
console.log("Fecha inicio (ISO):", fechaInicioISO);

// =========================
// 3) Crear array de escenarios (simples de ejemplo)
// =========================

const scenarios = [
  { nombre: "Escenario A", precio: 200000, plazoAnios: 25, interesNominalAnual: 3.2 },
  { nombre: "Escenario B", precio: 150000, plazoAnios: 30, interesNominalAnual: 2.5 },
  { nombre: "Escenario C", precio: 300000, plazoAnios: 20, interesNominalAnual: 3.8 }
];

console.log("Total escenarios:", scenarios.length);
console.log("Primer escenario:", scenarios[0]);

// =========================
// 4) Crear tabla de amortización básica (3 filas de ejemplo)
//    * No calculamos fórmulas reales todavía; valores simples para practicar Arrays + Date.
// =========================

schedule = []; // reinicio por claridad
let saldo = 100000;              // saldo inicial ficticio
const cuotaFija = 500;           // valor de ejemplo
const interesFijo = 100;         // valor de ejemplo (parte de la cuota)
const capitalFijo = cuotaFija - interesFijo;

for (let i = 1; i <= 3; i++) {
  const fechaParcela = new Date(fechaInicio);
  // sumamos i meses
  fechaParcela.setMonth(fechaParcela.getMonth() + i);

  // reducimos saldo con el "capital" pagado
  saldo = saldo - capitalFijo;

  schedule.push({
    mes: i,
    fecha: fechaParcela.toISOString().slice(0, 10), // "YYYY-MM-DD"
    cuota: cuotaFija,
    interes: interesFijo,
    capital: capitalFijo,
    saldo: saldo
  });
}

// Metemos la schedule en el escenario
scenario.schedule = schedule;

// Mostramos la schedule completa
console.log("Schedule (3 meses de ejemplo):", schedule);

// Y el escenario final
console.log("Escenario final:", scenario);
