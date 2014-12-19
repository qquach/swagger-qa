/**
 * This is the entry point for swagger UI
 */
var express = require("express"),
    app = express(),
    config = require("lib/config.js"),
    bodyParser = require("body-parser"),
    fs = require("fs");

app.use(express.static(config.ui));
app.user(bodyParser.json({type:"application/*+json"}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text({type:'text/*|application/xml'}));

fs.readdirSync('./handlers').forEach(function(file){
  var handler = require("handlers/"+file);
  handler(app);
});

requestHandler(app);
app.listen(config.port);
