var mongoose = require('mongoose');
var config = require('../../config/server');
mongoose.Promise = global.Promise;

var envUrl = ''//"mongodb+srv://doivjpxx:phong2410@cluster0-exler.mongodb.net/test?retryWrites=true";
var localUrl = `mongodb://127.0.0.1:27017/${config.DB.DATABASE_NAME}`;
var dbURI = envUrl ? envUrl : localUrl;
/*if(process.env.NODE_ENV === 'production'){
	dbURI = process.env.MONGOLAB_URI;
}*/
mongoose.connect(dbURI,  { useNewUrlParser: true });

//CONNECTION EVENTS
mongoose.connection.on('connected', ()=>{
	console.log('Mongoose connected to: ' + dbURI);
});
mongoose.connection.on('error', ()=>{
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', ()=>{
	console.log('Mongoose disconnected');
});