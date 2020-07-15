const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema


const calligraphySchema = mongoose.Schema({

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

autoIncrement.initialize(mongoose.connection);
calligraphySchema.plugin(autoIncrement.plugin, {
    model:'Calligraphy',
    field: 'projectId', // 
    startAt: 1, // 1에서 부터
    increment: 1 // 1씩 증가
})


const Calligraphy = mongoose.model('Calligraphy', calligraphySchema);

module.exports = { Calligraphy }