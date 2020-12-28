var express = require('express');
var router = express.Router();
var wheat = require('../static/Wheat.json');
var bajra = require('../static/bajra.json');
var community_dict = {
    wheat : wheat,
    bajra : bajra
}
var annual_rainfall = [29, 21, 37.5, 30.7, 52.6, 150, 299, 251.7, 179.2, 70.5, 39.8, 10.9]
var base = {
    "wheat": 1350,
    "bajra" : 1120
}
var community_array = [];



 function Community() {

    function modelfit(item)
    {
        console.log(item);
        
    }
    return {
        modelfit : modelfit
    };

}

Object.entries(community_dict).map(item => {
    var foo = Community();
   // console.log(item);
    foo.modelfit(item );

  })

for( var i in community_dict)
{
    community_array.push(i);
    
}
console.log(community_array);






