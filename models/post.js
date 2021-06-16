
const mongoose= require('mongoose');

const postSchema= mongoose.Schema({

    post_name:{
        type:String,
        require: true
    },
    user_name:{
        type: mongoose.Types.ObjectId, ref: 'User'

    },
})

module.exports= mongoose.model('Post', postSchema);