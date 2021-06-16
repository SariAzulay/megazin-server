
const mongoose= require('mongoose');

const magazinSchema= mongoose.Schema({

    post_name:{
        type:String,
        require: true
    },
    user_name:{
        type: mongoose.Types.ObjectId, ref: 'User'

    },
})

module.exports= mongoose.model('Magazin', magazinSchema);