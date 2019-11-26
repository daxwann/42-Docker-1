const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");
const middleware = require("../middleware");

//INDEX
router.get("/", function(req, res){
//get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds:allCampgrounds});
    }
  });
});

//CREATE
router.post("/", middleware.isLoggedIn, function(req, res){
  //get data from form and add to campgrounds array
  let name = req.body.name;
  let image = req.body.image;
  let desc = req.body.description;
  let price = req.body.price;
  let author = {
    id: req.user._id,
    username: req.user.username
  };
  let newCampground = {name: name, price: price, image: image, description: desc, author: author};
  //create a new campground
  Campground.create(newCampground, function(err, newlyCreated) {
    if(err){
      console.log(err);
    } else {
      req.flash("success", "Successfully added campground");
      res.redirect("/campgrounds");
    }
  });
});

//NEW
router.get("/new", middleware.isLoggedIn, function(req, res){
  res.render("campgrounds/new");
});

//SHOW - shows more info about one campground
router.get("/:id", function(req, res){
  //find the campground with provided id
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    if(err || !foundCampground){
      console.log(err);
      req.flash("error", "Cannot find campground");
      return res.redirect("/campgrounds");
    } else {
      console.log(foundCampground);
      //render show template with that campground
      res.render("campgrounds/show", {campground: foundCampground});
    }
  });
});

//Edit campground route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    res.render("campgrounds/edit", {campground: req.campground});
});

//Update campground route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
    if(err){
      res.redirect("/campgrounds");
    } else {
      req.flash("success", "Successfully updated campground");
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});
//destroy campground route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
  Campground.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/campgrounds");
    } else {
      req.flash("success", "Successfully removed campground");
      res.redirect("/campgrounds");
    }
  });
});

module.exports = router;
