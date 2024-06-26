
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../utill/mongoose');

class MeController {
   
   
    // [GET]/me/stored
    // storedCourses(req, res) {

    //     res.render('me/stored-courses');
    // }
    storedCourses(req, res, next) {
       
        // Course.find({})
        //     .then(courses => {
        //         res.render('me/stored-courses' , {courses: mutipleMongooseToObject(courses)})
        //     })
        //     .catch(next)
        Course
        .find({ })
        .lean()
        .then((courses) => res.render("me/stored-courses", { courses }))
        .catch(next);
           
    }
   
}

module.exports = new MeController();
