const express = require('express');
const router = express.Router();
const User = require("../models/users");
const multer = require('multer');

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads");
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + "_" + Date.now() + "_" + file.originalname);

    },

})
var upload = multer({
    storage:storage,
}).single("image");


// insert an user into database route

// router.post("/add" , upload , async(req,res)=>{
//     const user = new User({
//       name : req.body.name,
//       email:req.body.email,
//       phone:req.body.phone,
//       image:req.body.filename,
//     });
//   await  user.save((err)=>{
//         if(err){
//             res.json({message:err.message, type:'danger'});
//         } else{
//              req.session.message = {
//                 type :'success',
//                 message:'User added successfully'
//              };
//              req.redirect("/")
//         }
//     })
// })


router.post("/add", upload, async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: req.body.filename,
        });

        await user.save();
        req.session.message = {
            type: 'success',
            message: 'User added successfully'
        };
        res.redirect("/");
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});



router.get("/",(req,res)=>{
    res.render("index" ,{title :"home page"})
})


router.get("/add",(req,res)=> {
    res.render("add_users",{title: "Add Users"})
})

module.exports = router;