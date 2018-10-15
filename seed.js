var mongoose = require("mongoose"),
    Camp     = require("./models/campground"),
    Comment  = require("./models/comment");

    data     = [
        {  
            name: "desert fo",
            img: "https://images.unsplash.com/photo-1527707240828-f7ca7d3c46a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a7c6d927c900d0de631511b52ce1687&auto=format&fit=crop&w=600&q=60",
            desc: "just few words"
        },
        {  
            name: "mountaina",
            img: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a7383ad093ffea99d373681b9974056&auto=format&fit=crop&w=600&q=60",
            desc: "just few words"
        },
        {  
            name: "Carolina",
            img: "https://images.unsplash.com/photo-1525177089949-b1488a0ea5b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2133a2e6648c39b6d1845bcc603b09ce&auto=format&fit=crop&w=600&q=60",
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