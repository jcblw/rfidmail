require('dotenv').load();

var mail = require('sendgrid')
		(process.env.SENDGRIDUSERNAME, process.env.SENDGRIDPASSWORD),
	serialport = require('serialport'),
	SerialPort = serialport.SerialPort,
	acesskey = process.env.ACCESSKEY,
	rfid = new SerialPort('/dev/ttyUSB0', {
		parser : serialport.parsers.readline("\n")
	});

rfid.on('open', function(){
	console.log('rfid reader is open');
})

rfid.on('data', function (data) {
	var key = data.replace(/[\u0002-\u0003,\r]/g, '');

	if ( key === acesskey ) {
		mail.send({
			to : process.env.SENDGRIDTO,
			from : process.env.SENDGRIDFROM,
			subject : 'Acess Granted',
			text : 'Here are some cool stats about your great new statup'
		}, function(err, json) {
		  if (err) { return console.error(err); }
		  console.log(json);
		});
		return console.log('access granted to ' + key);
	}
	return console.log('access denied to ' + key );
})

