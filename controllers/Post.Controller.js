const PostModel = require("../models/Post.Model");
const SubjectModel = require("../models/Subject.Model");

const PostController = {
  // create: function (req,res){
  //     PostModel.create(req.body,function(err,item){
  //         if (err){
  //             res.status(406).json({status:406,message:"Question not created",data:null})
  //         }
  //         res.status(200).json({status:200,message:"created Question",data:item})
  //     })

  // },
  read: function (req, res) {
    PostModel.find({}, function (err, items) {
      if (err) {
        res.json(err);
      }
      res.json(items);
    }).select("-__v");
  },
  // update: function (req,res){
  //     PostModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
  //         if (err) {
  //             res.status(406).json({ status: 406, message: "Question not created"+err, data: null })
  //         } else
  //         res.status(200).json({ status: 200, message: "created Question", data: item })
  //     })

  // },
  // delete: function (req,res){
  //     PostModel.findByIdAndDelete(req.params.id, function (err, item) {
  //         if (err) {
  //             res.status(406).json({ status: 406, message: "Question not created", data: null })
  //         }
  //         res.status(200).json({ status: 200, message: "created Question", data: item })
  //     })
  // },
  // findById: function (req,res){
  //    PostModel.findOne({_id:req.params.id},function(err,item){
  //     if(err){
  //         res.json(err);
  //     }
  //     res.json(item)
  //    })
  // },

  addPost: function (req, res) {
    console.log(req.body);
    req.body["photo"] = req.file.filename;
    PostModel.create(req.body, async function (err, post) {
      if (err) {
        res.status(406).json({
          status: 406,
          message: "Post not created",
          data: null,
        });
      }
      const subject = await SubjectModel.findOneAndUpdate(
        { _id: req.body.subject },
        { $push: { posts: post._id } },
        { new: true }
      );
      if (!subject) {
        return res
          .status(406)
          .json({ status: 406, message: "Subject not found", data: null });
      }
      res
        .status(200)
        .json({ status: 200, message: "created Post", data: post });
    });
  },
};
module.exports = PostController;
