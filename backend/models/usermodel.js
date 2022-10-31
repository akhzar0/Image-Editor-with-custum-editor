// import
const {model,Schema} =require('../Connection');

// structure
const userSchema=new Schema({
    name: String,
    email: String,
    age: Number,
    password: String
})
// export
module.exports=model('user',userSchema);


