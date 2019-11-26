const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");

let data = [
  {
    name: "Joshua Tree",
    image: "https://www.campsitephotos.com/photo/camp/6302/feature_Zion_Watchman-f1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis. Et pharetra pharetra massa massa ultricies mi. Pulvinar mattis nunc sed blandit libero volutpat. Aenean vel elit scelerisque mauris pellentesque. Quis vel eros donec ac odio. Amet facilisis magna etiam tempor orci. Et magnis dis parturient montes. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet."
  },
  {
    name: "Yosemite",
    image: "https://www.campsitephotos.com/photo/camp/77950/feature_Natchez_State_Park-f3.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis. Et pharetra pharetra massa massa ultricies mi. Pulvinar mattis nunc sed blandit libero volutpat. Aenean vel elit scelerisque mauris pellentesque. Quis vel eros donec ac odio. Amet facilisis magna etiam tempor orci. Et magnis dis parturient montes. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet."
  },
  {
    name: "Grand Canyon",
    image: "https://www.campsitephotos.com/photo/camp/63940/feature_Nerstrand-Big_Woods-f3.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis. Et pharetra pharetra massa massa ultricies mi. Pulvinar mattis nunc sed blandit libero volutpat. Aenean vel elit scelerisque mauris pellentesque. Quis vel eros donec ac odio. Amet facilisis magna etiam tempor orci. Et magnis dis parturient montes. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet."
  }
];

function seedDB(){
  //Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("removed campgrounds!");
    //add a few campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if(err){
          console.log(err);
        } else {
          console.log("added a campground");
          //create a comment
          Comment.create(
            {
              text: "This campground is great, but I wish there was internet.",
              author: "Homer"
            }, function(err, comment){
              if(err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            });
        }
      });
    });
  });
}

module.exports = seedDB;
