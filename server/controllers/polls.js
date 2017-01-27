var mongoose = require('mongoose')
// assign mongoose model to a variable to allow it to be called in the controller
var Poll = mongoose.model('Poll')
var User = mongoose.model('User')
// Build out the methods in the friendsControllers below
function PollsController(){
  this.create = function(req,res){
    User.findOne({_id: req.params.id}, function(err, user){
      var poll = new Poll({question: req.body.question, option:[{option:req.body.option1},{option:req.body.option2},{option:req.body.option3},{option:req.body.option4}]})
      poll.user = user._id;
      poll.save(function(err, polls){
        if(err){
          console.log(err);
          res.json(err)
        }else{
          user.polls.push(polls);
          user.save(function(err){
            if(err){
              console.log(err);
              res.json(err);
            }else{
              // res.redirect('/topics') //
              res.json(polls)
            }
          });
        }
      })
    });
  };
  this.index = function(req,res){
    Poll.find({}).populate('user').exec(function(err, polls){
      if(err){
        res.json(err)
      }else{
        res.json(polls);
      }
    });
  };
  this.show = function(req,res){
    Poll.findOne({_id:req.params.id}, function(err, polls){
      if(err){
        res.json(err);
      }else{
        res.json(polls);
      }
    })
  };
  this.vote = function(req, res){
    Poll.findOne({_id: req.params.id}, function(err, polls){
      if(err){
        res.json(err);
      }else{
        for (var i = 0; i < polls.option.length; i++) {
          if(polls.option[i].option === req.body.option){
            vote = polls.option[i]
          }
        }
        vote.vote += 1;
        polls.save(function(err){
          if(err){
            res.json(err)
          }else {
            res.json(polls)
          }
        })
      }
    })
  }
  this.delete = function(req, res){
    Poll.remove({_id: req.params.id}, function(err, poll){
      if(err){
        res.json(err)
      }else{
        res.json(poll)
      }
    })
  }
  //   User.findOne({_id: req.body.id}, function(err, user){
  //     if(err){
  //       res.json(err)
  //     }else{
  //       for(var i = 0; i < user.polls.length; i++){
  //         if(user.polls[i] === req.params.id){
  //           user.polls.splice(i, 1);
  //         }
  //       }
  //       })
  //     }
  // }
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
}
module.exports = new PollsController(); // what does this export?
