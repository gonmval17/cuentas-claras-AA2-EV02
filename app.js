const express = require('express');
const app = express();

// Configuración para EJS
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Datos de ejemplo - Módulo Cuentas Claras
let transacciones = [
	{ id: 1, tipo: 'Ingreso', descripcion: 'Salario mensual', valor: 1500000 },
	{ id: 2, tipo: 'Gasto', descripcion: 'Mercado', valor: 200000 },
	{ id: 3, tipo: 'Gasto', descripcion: 'Servicios', valor: 120000 }
];

// RUTA GET - Muestra el listado (Evidencia 7.1)
app.get('/transacciones', (req, res) => {
	res.render('index', { transacciones });
});

// RUTA GET - Muestra el formulario
app.get('/nueva', (req, res) => {
	res.render('formulario');
});

// RUTA POST - Recibe datos del formulario (Evidencia 7.2)
app.post('/nueva', (req, res) => {
	const nuevaTransaccion = {
		id: transacciones.length + 1,
		tipo: req.body.tipo,
		descripcion: req.body.descripcion,
		valor: req.body.valor
	};
	transacciones.push(nuevaTransaccion);
	res.redirect('/transacciones');
});

app.get('/', (req, res) => {
	res.redirect('/transacciones');
});

app.listen(3000, () => {
	console.log('Servidor Cuentas Claras corriendo en http://localhost:3000');
});
