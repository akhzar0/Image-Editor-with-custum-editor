// import
const {model,Schema, Types} =require('../Connection');

// structure
const userSchema=new Schema({
    user: {type : Types.ObjectId, ref : 'user'},
    name: String,
    values: Object,
    createdAt: Date
})
// export
module.exports=model('filters',userSchema);


