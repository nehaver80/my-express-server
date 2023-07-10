//import express from "express";
//import http from "http";

const express = require("express");
const http = require("http");
const bodyParser =require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:true}));



app.get("/" ,function (req, res){
    res.sendFile(__dirname + "/index.html");

});

app.post("/" , function(req, res){
    //console.log(req.body.cityName);

    
const query =req.body.cityName;
const apiKey="99b78549960c3383b2a12e1f9a110df6";
const unit ="metric"

const url ="http://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" + apiKey +"&units=" + unit;


 http.get(url , function(response){
console.log(response.statusCode);

response.on("data" ,function(data){
//hexadecimal 
const weatherData = JSON.parse(data)
const temp= weatherData.main.temp
const weatherDescription = weatherData.weather[0].description
const icon = weatherData.weather[0].icon
const imgURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png"
res.write("<p>the weather is currently"  + weatherDescription +"<p>");
res.write("<h1>the temprature in " + query + " is " + temp + "degrees Celcius.</h1>");
res.write("<img src =" + imgURL+ ">");
res.send()
 

})

})


})



app.listen(3000 ,function() {
    console.log("Server is running on port 3000.");
})