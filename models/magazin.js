
const mongoose= require('mongoose');

const magazinSchema= mongoose.Schema({

    magazin_name:{
        type:String,
        require: true
    },
    user_name:{
        type: mongoose.Types.ObjectId, ref: 'User'

    },
    posts:[{
        type: mongoose.Types.ObjectId, ref: 'Post'
    }]


})

module.exports= mongoose.model('Magazin', magazinSchema);