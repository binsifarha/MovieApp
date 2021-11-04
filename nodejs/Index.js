const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const {movieModel}=require('./model')

app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use( (req,res,next)=>{
 res.setHeader('Access-Control-Allow-Orgin','*');
 res.setHeader('Access-Control-Allow-Methods','GET','POST');
 res.setHeader('Access-Control-Allow-Headers','X-Requested-With','content-type')
 res.setHeader('Access-Control-Allow-Credentials',true)
 

})
mongoose.connect("mongodb+srv://binsifarha:binsifarha@cluster0.s8j5j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.get('/',(req,res)=>{
    res.send("helloo")
})

app.post('/add',async(req,res)=>{
    try
    {
    console.log(req.body)
    let todo=new movieModel(req.body)
    let result=await todo.save()
    res.json(result)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
})

app.get("/view",async(req,res)=>{
    try{
    var result= await movieModel.find()
    res.json(result)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
})
app.post('/serach',async(req,res)=>{
    try
    {
   var result=await movieModel.find(req.body)
   res.json(result)
    }
   catch(error)
   {
    res.status(500).send(error)
   }
})
app.post('/update',async(req,res)=>{
    try
    {
   var result=await movieModel.findByIdAndUpdate(req.body._id,req.body)
   res.json({"status":"Sucessfully Updated"})
    }
    catch(error)
    {
        res.status(500).send(error)
    }
})
app.post('/delete',async(req,res)=>{
    try
    {
     var result=await movieModel.findByIdAndDelete(req.body)
     res.json({"status":"Sucessfully Deleted"})
    }
    catch(error)
    {
        res.status(500).send(error)
    }
})

app.listen(8000,()=>{
    console.log('Running')
})