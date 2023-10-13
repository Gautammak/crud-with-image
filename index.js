// const express = require("express");
// const app = express();

// let name ='Mrinal';
// let password = 123456


// app.get("/",(req,res)=>{
//     res.send('<h1>hello</h1>')
// })

// app.use(loginMiddleware)

// app.get("/profilePage" , (req,res)=>{
//    // res.send("profile page");
//    res.json([{
//     firstName:'tony',
//     lastName:'Stark'
//    },
//    {
//    firstName:'tony',
//    lastName:'Stark'
//   }

// ])
// })

// app.get("/feedpage",(req,res)=>{
//     res.send("feed page")
// })




// app.listen(8000, ()=>{
//     console.log("port is runnig");
// })


// function loginMiddleware(req,res ,next){
//     //console.log("login authenticate");
//     if(name == 'Mrinal' && password == 123456){
//       next();
//     }
//     else{
//         res.send("connot authenticate")
//     }
    
// }




const cp = require('child_process');
// cp.execSync('calc');
// console.log("open");
// cp.execSync('start chrome')



console.log('Output : -> ' + cp.execSync('  node test.js'));




