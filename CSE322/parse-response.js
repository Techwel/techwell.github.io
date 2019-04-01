function parseResponse(responseText){
   //this is basically all of the info on the City 
   //this creates an object where we can
   //access all of the information received
   //by the server.
   // console.log("\nTimeline: under 3:");
   var response = JSON.parse(responseText);
   // console.log("\n" + response.weather[0].main);
   
   //weather is the name of a subset
   //and main is a subset of weather
   //and [0] is a element in main
   var cloudCondition = response.weather[0].main;
   
   //name is a subset for the city_name
   var city = response.name;
   
   //sys is a subset and country is 
   //a subset of sys -> to get US
   var country = response.sys.country;
   
   //this main is now a subset 
   //and temp is a subset of main
   var degK = response.main.temp;
   
   var degF = 1.8*(degK - 273) + 32;
   degF = Math.floor(degF);
   
   // var weatherBox = document.getElementById("weather");
   response = city + ", " + country + " " + degF + "\u{00B0}" + "F " + cloudCondition;
   
   // console.log("\nEnd of parse-response: " + response)
   return response;
}