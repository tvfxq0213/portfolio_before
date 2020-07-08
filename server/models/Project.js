const mongoose = require('mongoose');
const Schema = mongoose.Schema


const projectSchema = mongoose.Schema({

    writer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    projectTitle:{
        type: String,
        maxlength:50
    },
    projectSubTitle:{
        type:String
    },
    description:{
        type: String,
    },
    category:{
        type:String
    },
    skills:{
        type:String
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    },
    tags:{
        type:String
    },
    privacy:{
        type:Number
    },
    thumbnail: {
        type:String
    }
    
}, {timestamp: true})



const Project = mongoose.model('Project', projectSchema);

module.exports = { Project }