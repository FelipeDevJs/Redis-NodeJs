const mongoose = require('mongoose')

try{
    const conn = mongoose.connect("", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Db rodando 🔥')
}catch(err){
    console.error(err)
}
