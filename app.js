// Dependencies

const express     = require ("express"),
      bodyParser  = require("body-parser"),
      mongoose    = require("mongoose"),
      seed        = require("./seed");
      Camp        = require("./models/campground"),

      app         = express(),
      dbUrl       = "mongodb://localhost:27017/yelp_camp";

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
app.get("/camps/new", function(req, res){
    res.render("new");
})

app.get("/", function(req, res){
    res.render("home");
})

app.get("/camps", function(req, res){
    Camp.find({}, function(err, camps){
        if(err){
            throw err;
            console("Something went wrong while retreving all camps!");
        } else{
            res.render("index", {camps : camps});
        }
    });
    
})

app.post("/camps", function(req, res){
    var campname = req.body.name;
    var image = req.body.imageUrl;
    var desc = req.body.desc;    
    var newcamp = {name: campname, img: image, desc: desc};

    Camp.create(newcamp, function(err, camp){
        if(err){
            console.log("Something went wrong while adding the Camp!");
            console.log(err);
        } else{
            console.log("Camp added successfuly!");
            console.log(camp);
        }
    });
    
    //camps.push(newcamp);

    res.redirect("/camps");
})



app.get("/camps/:id", function(req, res){
   var id = mongoose.Types.ObjectId(req.params.id);
    // res.send("Hello"+id);
    console.log(id);

    Camp.findById(id).populate("comments").exec( function(err, foundCamp){
        if(err) console.log(err);
        else{
            console.log(foundCamp);
            res.render("show", {foundCamp: foundCamp});
        }
    })
})



// Depoloying
app.listen(3001, function(){
    console.log("YelpCamp is serving on port 3000!");
})