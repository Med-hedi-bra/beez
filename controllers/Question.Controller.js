const QuestionModel = require("../models/Question.Model");

const QuestionController = {
  create: function (req, res) {
    QuestionModel.create(req.body, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "Question not created", data: null });
      }
      res
        .status(200)
        .json({ status: 200, message: "created Question", data: item });
    });
  },
  read: function (req, res) {
    QuestionModel.find({}, function (err, items) {
      if (err) {
        res.json(err);
      }
      res.json(items);
    }).select("-__v");
  },
  update: function (req, res) {
    QuestionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, item) {
        if (err) {
          res
            .status(406)
            .json({
              status: 406,
              message: "Question not created" + err,
              data: null,
            });
        } else
          res
            .status(200)
            .json({ status: 200, message: "created Question", data: item });
      }
    );
  },
  delete: function (req, res) {
    QuestionModel.findByIdAndDelete(req.params.id, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "Question not created", data: null });
      }
      res
        .status(200)
        .json({ status: 200, message: "created Question", data: item });
    });
  },
  findById: function (req, res) {
    QuestionModel.findOne({ _id: req.params.id }, function (err, item) {
      if (err) {
        res.json(err);
      }
      res.json(item);
    });
  },
};
module.exports = QuestionController;
