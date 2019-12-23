var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("This will be done soon");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started");
});