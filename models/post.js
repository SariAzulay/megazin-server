
const mongoose= require('mongoose');

const postSchema= mongoose.Schema({

    post_name:{
        type:String,
        require: true
    },
})

module.exports= mongoose.model('Post', postSchema);