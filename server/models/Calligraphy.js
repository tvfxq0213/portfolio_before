const mongoose = require('mongoose');
const Schema = mongoose.Schema


const calligraphySchema = mongoose.Schema({

    writer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    projectTitle:{
        type: String,
        maxlength:50
    },
    description:{
        type: String,
    },
    category:{
        type:String
    },
    privacy:{
        type:Number
    },
    thumbnail: {
        type:String
    }
    
}, {timestamp: true})



const Calligraphy = mongoose.model('Calligraphy', calligraphySchema);

module.exports = { Calligraphy }