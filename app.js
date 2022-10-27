const express = require('express');
const app = express();
const bundleCourseRouter = require("./routes/bundleCourse.route");
const courseRouter = require("./routes/course.route");
const categoryRouter = require("./routes/category.route");
const cors = require("cors");



app.use(cors());


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use ('/bundle', bundleCourseRouter);
app.use ('/course', courseRouter);
app.use ('/category', categoryRouter);


app.get ('/', (req, res, next)=>{
    res.send('Wellcome to my Server Side. This is Assignemt 10. And its home page');
})


//route not found error
app.use ((req,res) =>{
    res.status(404).json({
        message: "Route not found",
    });
})

//handling server error
app.use ((err, req,res, next) =>{
    res.status(500).json({
        message: "Something Brok",
    });
})


module.exports = app;