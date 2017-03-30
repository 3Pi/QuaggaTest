'use strict';

import * as express				from 'express';
import * as path					from 'path';
import * as serveFavicon	 	from 'serve-favicon';
import * as bodyParser			from 'body-parser';

let app = express();

app.set('x-powered-by', false);

app.use(serveFavicon(path.join(__dirname,'../app/QuaggaTest.ico')));

app.use(bodyParser.urlencoded({extended : true})); // get information from html forms
app.use(bodyParser.json({strict : true , type : 'application/json'})); // get information from json bodies

app.use('/static',express.static(path.join(__dirname, '../app')));
app.use('/static',express.static(path.join(__dirname, '../app/ng_components')));
app.use('/static',express.static(path.join(__dirname, '../app/html')));
app.use('/static',express.static(path.join(__dirname, '../app/node_modules')));

app.get('/', (req, res) => {
	res.sendFile('app/index.html', { root: path.join(__dirname, '..') });
});

app.listen(80, () => {
 console.log("Quagga Test Server is on !");
 });
