// Dependencies
const express       = require ("express"),
      bodyParser    = require("body-parser"),
      mongoose      = require("mongoose"),
      seed          = require("./seed");
      CampRoutes    = require('./routes/campground'),
      CommentRoutes = require('./routes/comment'),
      app           = express(),
      dbUrl         = "mongodb://localhost:27017/yelp_camp";

// Db connection
// Starting mongo : sudo service mongod start
// mongo --host localhost:27017
mongoose.connect(dbUrl, {useNewUrlParser: true}, function(err, db){
    if(err){
        console.log("DB Connection problem!");
        console.log(err);
    } else{
        console.log("Database Connected!");
    }
});

// Seeding the DB
seed();

// Configurations
//app.use(express.static(""));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use(CampRoutes);
app.use(CommentRoutes);

// Home
app.get("/", function(req, res){
    res.render("home");
})

// Depoloying
app.listen(3000, function(){
    console.log("YelpCamp is serving on port 3000!");
})