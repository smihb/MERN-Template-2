const mongoose = require('mongoose');

const password = '';
const dbName = '';
const uri = ``

const connection = ()=>{
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(db => console.log('DB Connected'))
        .catch((err)=>console.log(err))
} 
module.exports = connection