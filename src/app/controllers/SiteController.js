
const { render } = require('node-sass');
const { mutipleMongooseToObject } = require('../../utill/mongoose');
const Course = require('../models/Course');


class SiteController {
   
    index(req, res, next) {
        Course
          .find({})
          .lean()
          .then((courses) => res.render("home", { courses }))
          .catch(next);
      }
    
       // [GET]/search/
       giohang(req, res, next) {
      //   const keyword = req.query.q;
      
      //   if (typeof keyword !== 'string' || keyword.trim() === '') {
      //     // Handle trường hợp keyword không hợp lệ, ví dụ: trống hoặc không tồn tại
      //     // Có thể render một trang thông báo lỗi hoặc chuyển hướng người dùng về trang khác
      //     return res.redirect('/'); // Ví dụ chuyển hướng về trang chủ
      //   }
      
      //   Course.find({
      //     $or: [
      //       { name: { $regex: keyword, $options: 'i' } },
      //       { slug: { $regex: keyword, $options: 'i' } },
      //       { img: { $regex: keyword, $options: 'i' } },
      //       { gia: { $regex: keyword, $options: 'i' } }
      //     ]
      //   })
      //     .lean()
      //     .then((courses) => {
      //       res.render('courses/search_results', { courses });
      //     })
      //     .catch(next);

      res.render('giohang');
      }
       
    
    
   
}

module.exports = new SiteController();
