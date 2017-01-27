var mongoose = require('mongoose')
// assign mongoose model to a variable to allow it to be called in the controller
var User = mongoose.model('User')
// Build out the methods in the friendsControllers below
function UsersController(){
  this.login = function(req, res){
    User.findOne({name: req.body.name}, function(err, users){
      if(err){
        res.json(err)
      }else{
        res.json(users)
      }
    })
  }
  this.create = function(req,res){
    var user = new User(req.body)
    user.save(function(err, users){
      if(err){
        res.json(err);
      }else{
        res.json(users);
      }
    })
  };
  // this.index = function(req,res){
  //   User.find({}, function(err, users){
  //     res.json(users);
  //   })
  // };
  // this.update = function(req,res){
  //   User.update({_id: req.params.id}, req.body, function(err, users){
  //     if(err){
  //       res.json(err);
  //     }else{
  //       res.json(users);
  //     }
  //   })
  // };
  // this.delete = function(req,res){
  //   User.remove({_id:req.params.id}, function(err, users){
  //     if(err){
  //       res.json(err)
  //     }else{
  //       res.json(users);
  //     }
  //   })
  // };
  // this.show = function(req,res){
  //   User.findOne({_id:req.params.id}, function(err, users){
  //     if(err){
  //       res.json(err);
  //     }else{
  //       res.json(users);
  //     }
  //   })
  // };
}
module.exports = new UsersController(); // what does this export?
