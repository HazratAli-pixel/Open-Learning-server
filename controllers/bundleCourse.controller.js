const BundleCourse = require('../assets/bundlecourse.json')



const BundleCourseALlDetails =  (req, res) => {
    res.send(BundleCourse);
};
const singleCourseDetails =  (req, res) => {
  const courseid = req.params.id;
  const result = BundleCourse.find(data => data._id == courseid);
  if(result){
    res.send(result);
  }
  res.status(500).json({
    message: "data not Found"
  })

};




module.exports = {
  BundleCourseALlDetails, 
  singleCourseDetails
};
