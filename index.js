//importing modules
const express = require("express");
const bodyparser = require("body-parser");

// stores the express module into the app variable!
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
//sends index.html
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

//this is used to post the data on the specific route
app.post("/", function (req, res) {
    heigh = parseFloat(req.body.Height);
    weigh = parseFloat(req.body.Weight);
    bmi = weigh / (heigh * heigh);

    //number to string format
    bmi = bmi.toFixed();

    req_name = req.body.Name;

    // CONDITION FOR BMI
    if (bmi < 19) {
        res.send("<h1>Results of " + req_name +
            "<br><h2>BMI is around: " + bmi +
            "<br><h2>You are UnderWeight!");
    } else if (19 <= bmi && bmi < 25) {
        res.send("<h1>Results of " + req_name +
            "<br><h2>BMI is around: " + bmi +
            "<br><h2>You are Normalweight!");
    } else if (25 <= bmi && bmi < 30) {
        res.send("<h1>Results of " + req_name +
            "<br><h2>BMI is around: " + bmi +
            "<br><h2>You are Overweight!");
    } else {
        res.send("<h1>Results of " + req_name +
            "<br><h2>BMI is around: " + bmi +
            "<br><h2>You are Obese!");
    }
});

//this is used to listen a specific port!
app.listen(process.env.PORT || 5000, function () {
    console.log("port active");
});