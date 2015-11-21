
//var express = require('express');
//var app = express();
//var connect = require('connect');
//var http = require('http').Server(app);
//var io = require('socket.io')(http);
//var domain = require('domain');

var options = {
	debug : true,
	port : 3000,
	state : {
		transition : false
	}
};
var server;
var detect_crash;

var methods = {
};



/*
// setup: server paths
app.use(express.static(__dirname + '/public', { index : 'index.html' }));
app.get('/stats', function (req, res) {
	var count = 0;
	for (var i = 0; i < socket_queue.length; i++) {
		var id = socket_queue[i];
		if (typeof socket_map[id] !== 'undefined') {
			count++;
		}
	}
	if (current_king) count++;
	res.send({ total : count });
});
app.get('/shutdown', function (req, res) {
	current_king = '';
	launcher.off();
});
app.get('/reload', function (req, res) {
	options.state.reload = false;
	options.ammo_count = options.max_ammo;
	socket.emit('reloaded', true);
});

// init socket
io.on('connection', function (socket) {
	if (options.debug) console.log('event: connection', socket.id);
	methods.prepare(socket);
});
// init server
server = http.listen(options.port, function () {
	if (options.debug) console.log(server.address());
});
// init crash handler
detect_crash = domain.create();
detect_crash.on('error', function(error) {
	if (options.debug) console.log('event: error: node crashed', error);
});
*/