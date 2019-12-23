


var express = require("express");
var app = express();

app.get("/hi", function(req, res){
    res.send("This will be done soon");
    console.log("trying now");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started");
});

*