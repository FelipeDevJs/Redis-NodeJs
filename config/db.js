const mongoose = require('mongoose')

try{
    const conn = mongoose.connect("mongodb+srv://felps:5emNexXo@cluster0.bsud5.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Db rodando 🔥')
}catch(err){
    console.error(err)
}
