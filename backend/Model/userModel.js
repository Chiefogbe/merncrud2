import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },

  email:{
    type:String,
    required:true,
    unique:true
  },

  age:{
    type:String,
    required:true,
  }
},{
  timestamps:true
})

const userSchemaModel=mongoose.model('users', userSchema)
export default userSchemaModel