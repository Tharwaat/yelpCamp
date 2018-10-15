const express  = require('express'),
      mongoose = require('mongoose'),
      router   = express.Router(),      
      Camp     = require("../models/campground");

// Camps
router.get("/camps/new", function(req, res){   // New Camp form
    res.render("camps/new");
})

router.get("/camps", function(req, res){   // Showing all camps
    Camp.find({}, function(err, camps){
        if(err){
            throw err;
            console("Something went wrong while retreving all camps!");
        } else{
            res.render("camps/index", {camps : camps});
        }
    });
    
})

router.post("/camps", function(req, res){  // Adding new camp
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

    res.redirect("/camps");
})



router.get("/camps/:id", function(req, res){   //Showing specific camp
   var id = mongoose.Types.ObjectId(req.params.id);
    // res.send("Hello"+id);
    console.log(id);

    Camp.findById(id).populate("comments").exec( function(err, foundCamp){
        if(err) console.log(err);
        else{
            console.log(foundCamp);
            res.render("camps/show", {foundCamp: foundCamp});
        }
    })
})

module.exports = router;