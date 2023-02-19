const express = require("express");
const RouteUser = require("./routes/User.Route"); //**import de route (user) dans index
const RouteAdmin = require("./routes/Admin.Route");
const RouteCustomer = require("./routes/Customer.Route"); //TODO import de route (customer) dans index
const RouteService = require("./routes/Service.Route");
const RouteContact = require("./routes/Contact.Route");
const RouteQuestion = require("./routes/Question.Route");
const RouteResponse = require("./routes/Response.Route");
const RouteSubject = require("./routes/Subject.Route");
const RoutePost = require("./routes/Post.Route");
const RouteWarning = require("./routes/Warning.Route");

const mongoose = require("mongoose");
const cors = require("cors");

//appel de la base
// const db=require("./config/db") //appel de la base

// DB connection
mongoose
  .connect(
    "mongodb+srv://bra:12345m@cluster0.hbknp.mongodb.net/comp?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//todo middleware
const auth = require("./middleware/auth");
const upload = require("./middleware/uploads");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
const port = 3000;
app.use(bodyParser.json());

app.use(cors("*"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.set("secretKey", "nodeRestApi"); //! jwt secret token

app.use("/users", RouteUser); //**creation de route de users nb:c'est la meme de l'import en dessus
app.use("/admins", RouteAdmin); //**creation de route de admin
app.use("/customers", upload.single("file"), RouteCustomer); //todo route de customer
app.use("/services", RouteService);
app.use("/contacts", RouteContact);
app.use("/questions", RouteQuestion);
app.use("/responses", RouteResponse);
app.use("/posts", RoutePost);
app.use("/subjects", RouteSubject);
app.use("/warning", RouteWarning);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
