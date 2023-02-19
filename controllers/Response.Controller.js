const ResponseModel = require("../models/Response.Model");
const QuestionModel = require("../models/Question.Model");

const ResponseController = {
  // create: function (req,res){
  //     ResponseModel.create(req.body,function(err,item){
  //         if (err){
  //             res.status(406).json({status:406,message:"Question not created",data:null})
  //         }
  //         res.status(200).json({status:200,message:"created Question",data:item})
  //     })

  // },
  read: function (req, res) {
    ResponseModel.find({}, function (err, items) {
      if (err) {
        res.json(err);
      }
      res.json(items);
    }).select("-__v");
  },
  // update: function (req,res){
  //     ResponseModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
  //         if (err) {
  //             res.status(406).json({ status: 406, message: "Question not created"+err, data: null })
  //         } else
  //         res.status(200).json({ status: 200, message: "created Question", data: item })
  //     })

  // },
  // delete: function (req,res){
  //     ResponseModel.findByIdAndDelete(req.params.id, function (err, item) {
  //         if (err) {
  //             res.status(406).json({ status: 406, message: "Question not created", data: null })
  //         }
  //         res.status(200).json({ status: 200, message: "created Question", data: item })
  //     })
  // },
  // findById: function (req,res){
  //    ResponseModel.findOne({_id:req.params.id},function(err,item){
  //     if(err){
  //         res.json(err);
  //     }
  //     res.json(item)
  //    })
  // },

  addResponse: function (req, res) {
    console.log(req.body);
    ResponseModel.create(req.body, async function (err, response) {
      if (err) {
        res.status(406).json({
          status: 406,
          message: "Response not created",
          data: null,
        });
      }
      const question = await QuestionModel.findOneAndUpdate(
        { _id: req.body.question },
        { $push: { responses: response._id } },
        { new: true }
      );
      if (!question) {                 
        return res
          .status(406)
          .json({ status: 406, message: "Response not found", data: null });
      }
      res
        .status(200)
        .json({ status: 200, message: "created Response", data: response });
    });
  },
};
module.exports = ResponseController;
