// Cuentas Claras - Modulo Stand-Alone
let transacciones = [
	{tipo: 'Ingreso', descripcion: 'Salario', valor: 1500000},
	{tipo: 'Gasto', descripcion: 'Arriendo', valor: 800000}
];
console.log("=== CUENTAS CLARAS - VERSION STAND-ALONE ===");
transacciones.forEach(t => {
	console.log(`${t.tipo} | ${t.descripcion} | $${t.valor}`);
});
