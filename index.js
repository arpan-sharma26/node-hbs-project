const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');
hbs.registerPartials('./views/partials');

const pubPath = path.join(__dirname, './public');
app.set('view engine', 'hbs');

app.get('/aboutus', (req, res) => {
	let date = new Date();
	res.render('aboutus', {
		todayDate: date,
		dateD: date.getDate(),
		dateM: date.getMonth() + 1,
		dateY: date.getFullYear(),
	});
});

app.get('/appointments', (req, res) => {
	res.render('appointments', {});
});

app.get('/ourservices', (req, res) => {
	res.render('ourservices', {
		mainText: 'Hello Customers',
	});
});

app.get('/ourbarbers', (req, res) => {
	res.render('ourbarbers', {
		ourTeam: 'Meet Our Team Members',
	});
});

app.get('/contact', (req, res) => {
	res.render('contact', {});
});

app.listen(PORT, () => {
	console.log('Server has been started.');
});

app.use(express.static(pubPath));
