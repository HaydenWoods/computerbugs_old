var express = require("express");
var app = express();
var serv = require("http").Server(app);

app.use("/static", express.static(__dirname + "/build/static"));
app.get("/*",function(req, res){
	res.sendFile(__dirname + "/build/index.html");
});

console.log("Listening on 4001")
serv.listen(4001, "0.0.0.0");
