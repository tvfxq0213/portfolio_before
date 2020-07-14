const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');


const Schema = mongoose.Schema


const projectSchema = mongoose.Schema({

    writer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    projectId :{
        type: Number,
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

autoIncrement.initialize(mongoose.connection);
projectSchema.plugin(autoIncrement.plugin, {
    model:'Project',
    field: 'projectId', // 
    startAt: 1, // 1에서 부터
    increment: 1 // 1씩 증가
})

const Project = mongoose.model('Project', projectSchema);
module.exports = { Project }