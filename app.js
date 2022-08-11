const express = require('express'),
	app = express(),
	jasper = require('node-jasper')({
		path: 'lib3/jasperreports-6.2.0',
		reports: {
			hw: {
				jasper: 'lib3/jasperreports-6.2.0/reports/hello_world.jasper',
			},
		},
	});

app.get('/report', function (req, res, next) {
	console.log('entrou *****************');
	console.log(jasper);
	let report = {
		report: 'hw',
		data: {
			name: 'Lili',
		},
	};
	let pdf = jasper.pdf(report);
	console.log('pdf **********************');
	console.log(pdf);
	res.set({
		'Content-type': 'application/pdf',
		'Content-Length': pdf.length,
	});
	res.send(pdf);
});

app.listen(3000);
