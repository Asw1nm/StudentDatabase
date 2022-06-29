const express = require('express')
const dataService = require('./services/data.service')
const cors = require('cors')
const app = express()
app.use(cors({
    origin:'http://localhost:4200'
}))

app.use(express.json())


app.post('/storeData',(req,res)=>{
    dataService.storeData(req.body.fname,req.body.lname,req.body.no,req.body.age,req.body.gender)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/showData',(req,res)=>{
    dataService.showData()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.listen(3000,()=>{
    console.log('server started');
})