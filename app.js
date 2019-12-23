
var express = require("express");
var app = express();

app.get("/hi", function(req, res){
    res.send("This will be done soon");
    console.log("trying now");
});

app.listen(3000, () => console.log('listening at port 3000'));  