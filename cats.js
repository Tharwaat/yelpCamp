// var mongoose = require("mongoose");
// var dbUrl = "mongodb://localhost:27017/cat_app";

// mongoose.connect(dbUrl, {useNewUrlParser: true}, function(err, db){
//     if(err) throw err;
//     console.log("Database connected!");
//     //db.close();
// });

// var CatSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     breed: String
// });

// var Cat = mongoose.model("Cat", CatSchema);

// // var ge = new Cat({
// //     name: "heo",
// //     age: 12,
// //     breed: "sherazi!"
// // });

// // ge.save(function(err, cat){
// //     if(err){
// //         console.log("Something went Wrong !");
// //     } else{
// //         console.log("Save completed!");
// //         console.log(cat);
// //     }
// // });

// // Cat.create({
// //     name: "Lucy",
// //     age: 1123,
// //     breed: "seyame"
// // }, function(err, cat){
// //     if(err) console.log(err);
// //     else console.log(cat);
// // });

// Cat.find({}, function(err, cats){
//     if(err) console.log(err);
//     else console.log(cats);
// })


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '-' + dd+10 + '-' + yyyy;
console.log(today);