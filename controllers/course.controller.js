const Course = require('../assets/course.json')


const CourseAllDetails = (req, res) => {
  res.send(Course)
};
const SingleCourseDetails = (req, res) => {
  const courseid = req.params.id;
  const result = Course.find(data => data._id == courseid);
  if(result){
    res.send(result);
  }
  res.status(500).json({
    message: "data not Found"
  })
};



module.exports = {
  CourseAllDetails, SingleCourseDetails
};
