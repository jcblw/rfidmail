## RFIDMail

send an email with the swipe of an rfid card, only authed ones.

### Install

```
git clone https://github.com/jacoblwe20/rfidmail.git
cd rfidmail
npm install
```

Then youll need to do some additional setup. Go to [Sendgrid](https://sendgrid.com/user/signup) to signup for an account. Then in your directory create a file named `.env` and file out your information. Here is an example.

```
SENDGRIDUSERNAME=bigballer22
SENDGRIDPASSWORD=playa4lyfe
ACCESSKEY=5300661E9BBA
SENDGRIDFROM=hi@yourdomain.com
SENDGRIDTO=your@emailaddress.com
```

Onces you have those two things setup you can run the app.

```
[sudo] node index.js
```

### RFID Issues

The path `/dev/ttyUSB0` with not be the right path for everyone, please findout what path you RFID card reader is on. You can do this by looking in `/dev`

```
cd /dev
#unplug device
ls
#plug in device
ls
# look for changes
```

or you can add this to your `index.js`

```
serialport.list( function ( err, res ) {
	if ( err ) return console.log( 'Error: ', err );
	console.log( res );
})
```

The compName will be the location, and then add that where '/dev/ttyUSB0' is.
