const express = require("express");


// const bodyParser = require("body-parser");
// const ejs = require("ejs");
const mongoose = require("mongoose");

const userSchema = {
    email: String,
    password: String
};

const User = new mongoose.model("User", userSchema);


const app = express();
const cors = require("cors");

mongoose.connect("mongodb+srv://DBU:DBUP@cluster0.bqsv8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true });

app.use(cors());

app.use(express.static("public"));


app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.get("/", function (req, res) {
    res.redirect("/");
});

app.get("/api/login", function (req, res) {
    res.redirect("/api/login");
});

app.get("/api/register", function (req, res) {
    res.redirect("/api/register");
});


app.post("/api/register", function (req, res) {
    // const newUser = new User({
    //     email: req.body.username,
    //     password: req.body.password
    // })

    // newUser.save(function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         res.redirect("/secrets");
    //     }
    // });

    console.log(req.body);
});


app.post("/api/login", function (req, res) {
    // const username = req.body.username;
    // const password = req.body.password;

    // User.findOne({ email: username }, function (err, foundUser) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         if (foundUser) {
    //             if (foundUser.password === password) {
    //                 res.redirect("/secrets");
    //             }
    //         }
    //     }
    // })
    console.log(req.body);
}

)


// app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));