var mongoose = require("mongoose"),
    Camp     = require("./models/campground"),
    Comment  = require("./models/comment");

    data     = [
        {  
            name: "desert fo",
            img: "http://bushcampcompany.com/photos/home_camps_kuyenda_new2.jpg",
            desc: "just few words"
        },
        {  
            name: "mountaina",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHzAx0CIPJGHvMDU_QWPNhqJLgpif-YmhOYOG27ZEucxxEUo_",
            desc: "just few words"
        },
        {  
            name: "Carolina",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnlfQMfFGzZfMAfufkXpWKSB3Vpuc6-lEbiOVLjmsz-vME_deK",
            desc: "just few words"
        }
    ];

function SeedDB(){
    Camp.remove({}, function(err){
        if(err) console.log(err);
        else{
            console.log("Camps removed!");

            data.forEach(function(singlecamp){

                Camp.create(singlecamp, function(err, singlecamp){
                    if(err) console.log(err);

                    else{
                        console.log("Camp added!");

                        Comment.create({
                            text: "some comments",
                            author: "Ahmed"
                        }, function(err, comment){
                            if(err) console.log(err);
                            else{
                                singlecamp.comments.push(comment);
                                singlecamp.save();
                                console.log("Comment added!");
                            }
                        })
                    } 
                })
            })

        }
    })
}

module.exports = SeedDB;