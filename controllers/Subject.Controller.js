const SubjectModel = require("../models/Subject.Model")


const SubjectController={
    create: function (req,res){
        SubjectModel.create(req.body,function(err,item){
            if (err){
                res.status(406).json({status:406,message:"Subject not created",data:null})
            }
            res.status(200).json({status:200,message:"created Subject",data:item})
        })

    },   
    read: function (req,res){
        SubjectModel.find({},function(err,items){
            if(err){
                res.json(err);
            }
            res.json(items)
        }).select("-__v") 
 
    },
    update: function (req,res){
        SubjectModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "Subject not created"+err, data: null })
            } else
            res.status(200).json({ status: 200, message: "created Subject", data: item })
        })

    },
    delete: function (req,res){
        SubjectModel.findByIdAndDelete(req.params.id, function (err, item) {
            if (err) {
                res.status(406).json({ status: 406, message: "Subject not created", data: null })
            }
            res.status(200).json({ status: 200, message: "created Subject", data: item })
        })
    },
    findById: function (req,res){
       SubjectModel.findOne({_id:req.params.id},function(err,item){
        if(err){
            res.json(err);
        }
        res.json(item)
       })
    },

  

}
module.exports = SubjectController 


