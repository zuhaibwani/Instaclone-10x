const mongoose = require("mongoose")
const getTime=()=>{
    let newTime = new Date().toLocaleTimeString()
    // console.log(newTime)
    return newTime
}

var current = new Date();

let timeRightNow = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`
// let timeNow = setInterval(()=>getTime(), 1000)
const postSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    likes : {
        type : Number,
        default : 9879
        // required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String
        // required : true
    },
    date : {
        type : String,
        // default: new Date().toDateString()
    },
    time : {
        type : String
        // default : new Date().toTimeString()
    }
})

const postModal = mongoose.model("post", postSchema)

module.exports = postModal;