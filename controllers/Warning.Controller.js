const WarningModel = require("../models/Warning.Model");
const accountSid = "AC87e829858e929d1532403d4e1fbff986";
const authToken = "20eb5408a17e0c9452c636929708c3bd";
const client = require("twilio")(accountSid, authToken);

const WarningController = {
  create: function (req, res) {
    WarningModel.create(req.body, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "warning not created", data: null });
      }
      res
        .status(200)
        .json({ status: 200, message: "created warning", data: item });

      //send a message
      console.log(req.body.phone);

      client.messages
        .create({
          body:
            "\nHello \nWe are the team of BEEZ and we inform you that you can be attacked by Hornets in " +
            req.body.location +
            "\nYou can prevent this attack by visiting our site in order to help you",
          from: "+15619834439", // replace with your Twilio phone number
          to: req.body.phone, // replace with the recipient's phone number
        })
        .then((message) => console.log(message.sid))
        .catch((error) => console.error(error));
    });
  },
  read: function (req, res) {
    WarningModel.find({}, function (err, items) {
      if (err) {
        res.json(err);
      }
      res.json(items);
    }).select("-__v");
  },
  update: function (req, res) {
    WarningModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, item) {
        if (err) {
          res.status(406).json({
            status: 406,
            message: "warning not created" + err,
            data: null,
          });
        } else
          res
            .status(200)
            .json({ status: 200, message: "created warning", data: item });
      }
    );
  },
  delete: function (req, res) {
    WarningModel.findByIdAndDelete(req.params.id, function (err, item) {
      if (err) {
        res
          .status(406)
          .json({ status: 406, message: "warning not created", data: null });
      }
      res
        .status(200)
        .json({ status: 200, message: "created warning", data: item });
    });
  },
  findById: function (req, res) {
    WarningModel.findOne({ _id: req.params.id }, function (err, item) {
      if (err) {
        res.json(err);
      }
      res.json(item);
    });
  },

  wellReceived: function (req, res) {
    WarningModel.updateOne(
      { _id: req.params.id },
      {
        etat: true,
      }
    )
      .then(() => res.status(201).json({ message: `Warning is well received` }))
      .catch(() => res.status(404).json({ mesa: err }));
  },
  //here is a problem
  getTheLast: function (req, res) {
    WarningModel.findOne({}, function (err, item) {
      if (err) {
        res.json(err);  
      }
      res.json(item);  
    });
  },
};

// format date

// const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
module.exports = WarningController;
