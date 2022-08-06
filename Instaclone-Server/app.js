const express = require("express")
const mongoose = require("mongoose")
const app = express()
const postModal = require("./MongoDB/postSchema")
require('dotenv').config()
const cors = require('cors')

const mongodb = process.env.MONGO_DB

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "https://instaclone-zw.herokuapp.com"); // Update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// app.use(multer())

mongoose.connect(mongodb, ()=>{
    console.log("Successfully connected to database")
}, (err)=>{
    console.log(err)
})

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin : https://instaclone-zw.herokuapp.com");
    next();
});



app.listen(process.env.PORT || 5000, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Listensing to server on port 5000")
    }
    
})

app.post("/uploadpost", (req, res)=>{
    // console.log(req.body)
    postModal.create({name : req.body.name, location:req.body.location, likes:req.body.likes, image:req.body.image, description:req.body.description,date:new Date().toDateString(), time : new Date().toTimeString()}).then((data)=>{
        res.status(200).send("Post uploaded successfully!")
    }).catch((err)=>{
        console.log(err)
        res.status(400).send(err)
    })
})

//db.posts.find().sort({time : -1}) -- To sort posts with respect to time in descending order
//db.posts.find().sort({time : 1}) -- To sort posts with respect to time in ascending order

app.get("/postview", (req, res)=>{
    postModal.find().sort({date : 1, time: -1}).then((allData)=>{
        res.status(200).send(allData)
    }).catch((err)=>{
        // console.log(err)
        res.status(400).send(err)

    })
    
})

app.delete("/deletepost", (req, res)=>{
    // console.log(req.body.id)
    postModal.deleteOne({_id : req.body.id}).then(()=>{
        res.status(200).send("Deleted successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

app.get("/", (req, res)=>{
    res.status(200).send("Instaclone backend!")
})

//FOR MONGO SHELL
// mongosh "mongodb+srv://10x.ehmae.mongodb.net/myFirstDatabase" --apiVersion 1 --username zuhaibwani