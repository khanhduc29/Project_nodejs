
const Course = require('../models/Course');
const { mongooseToObject } = require('../../utill/mongoose');

class CourseController {
   
    show(req, res, next) {
        

        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show' , {course: mongooseToObject(course)})
            })
            .catch(next)
        

    }
    
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
    //[POST] /courses/create
    store(req, res, next) {
        const formData = req.body;
        
        const course = new Course(formData);
        course.save(course)
            .then(() => res.redirect('/'))
            .catch(console.error())
        
      
        
    }
    // Get /courses/:id/edit
    edit(req, res, next) {
    //     Course.findById(req.params.id)
    //         .then(course => res.render('courses/edit'), {
    //             course: mongooseToObject(course)
    //         } )
    //         .catch(next)
    Course.findById( req.params.id )
    .then(course => {
        res.render('courses/edit' , {course: mongooseToObject(course)})
    })
    .catch(next)
    }
    // put/ courses/:id
    update(req, res, next) {
        // res.json(req.body)
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => {
                res.redirect('/me/stored/courses')
            })
            .catch(next)


    }

    // delete /courses/delete 
    delete(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [GET]/search/
   
}

module.exports = new CourseController();
