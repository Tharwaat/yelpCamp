const express = require('express'),
      router  = express.Router(),
      mongoose = require('mongoose'),
      Camp    = require("../models/campground"),
      Comment = require("../models/comment");

// Comments
router.get("/camps/:id/comments/new", function(req, res){
    var id = mongoose.Types.ObjectId(req.params.id);
    console.log(id);
    Camp.findById(id, function(err, camp){
        if(err) console.log(err);
        else res.render("comments/new", {camp: camp});
    })
})

router.post("/camps/:id/comments", function(req, res){
    var id = mongoose.Types.ObjectId(req.params.id);

    Camp.findById(id, function(err, camp){
        if(err) console.log(err);
        else{
            console.log(req.body.comment);

            Comment.create(req.body.comment, function(err, comment){
                if(err) console.log(err);
                else{
                    camp.comments.push(comment);
                    camp.save();
                    res.redirect("/camps/" + camp._id);
                }
            })
        }
    })
})

module.exports = router;