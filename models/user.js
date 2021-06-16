

const mongoose= require('mongoose');

const userSchema= mongoose.Schema({

    user_name:{
        type:String,
        require: true
    },
    email:{
        type:String
    },
    magazins:[{
        type: mongoose.Types.ObjectId, ref: 'Magazin' 
    }]

})

module.exports= mongoose.model('User', userSchema);