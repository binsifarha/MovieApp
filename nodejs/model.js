const mongoose=require('mongoose')

let MongooseSchema=mongoose.Schema

const movieSchema=new MongooseSchema(
    {
        movie:String,
        actor:String,
        actress:String,
        director:String,
        producer:String,
        camera:String,
        year:Number,
        language:String


        
    }
)

var movieModel=mongoose.model("todos",movieSchema)

module.exports={movieModel}