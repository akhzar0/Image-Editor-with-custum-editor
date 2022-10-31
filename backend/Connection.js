const mongoose=require('mongoose');
const dbName="imageeditor"
const url= `mongodb+srv://akhzar:Akhzar44@cluster0.j4d1y1r.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// connect to the database
// asynchronous function -retuns a promise(object)
mongoose.connect(url)
.then((result)=>{
    console.log('successfully connected');
}).catch((err)=>{
    console.log(err);
});

module.exports=mongoose;