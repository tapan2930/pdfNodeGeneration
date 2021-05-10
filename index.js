const pdfGen = require('./pdf')
const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.static('public'));


app.get('/',async  function (req, res) {
    console.log("inside server node")
    let pdfBuffer = null;
    try{
     pdfBuffer = await pdfGen.app()
     
    }catch(err){
        console.log(err)
    }

    res.download(__dirname + '/resumeTapan.pdf', 'resumeTapan.pdf');
})
  
app.listen(8080)

