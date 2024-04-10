const mongoose = require('mongoose');

const data = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    userId: {
        type: String,
        default: ""
    },
    booked:{
        type:Boolean,
        required: false,
        default:false
    }
});

module.exports = mongoose.model('Ticket', data);