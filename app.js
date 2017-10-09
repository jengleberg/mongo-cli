var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";



mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  //Prompt to see all restaurants
  var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  if(allChoice == "all"){
    collection.find().toArray(function(err, doc){
    	console.log(doc);
    });
  } else {
   console.log("Aw, you don't want to see the restaurants?");
  	}  

    // Promt to see one restaurant
  	var oneChoice = prompt("Type the name of the restaurant and press enter to display that restaurants' name: ");
    	collection.find({name: oneChoice }).toArray(function(err, doc){ 
  		console.log(doc);
  		});

   var newName = prompt("Enter the name of the new restaurant. name: ");
   var newStreet = prompt("Enter the street of the new restaurant. street: ");
   var newZipCode = prompt("Enter the zipcode of the new restaurant. Zipcode: ");
   var newYelp = prompt("Enter the yelp url of the new restaurant. url: ");
   collection.insert(
      {name: newName,
       address: {street: newStreet, zipcode: newZipCode},
       yelp: newYelp}
    );
});