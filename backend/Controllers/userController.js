import userSchemaModel from "../Model/userModel.js"

export const getUser=(req, res)=>{
 userSchemaModel.find({})
 .then((users)=>{
  res.json(users)
 })
 .catch((error)=>{
  res.json(error)
 })
}

export const postUser=(req, res)=>{
 userSchemaModel.create(req.body)
 .then((users)=>{
  res.json(users)
 })
 .catch((error)=>{
  res.json(error)
 })
}

export const updateUser=(req,res)=>{
  const id=req.params.id
  userSchemaModel.findById({_id:id})
  .then((users)=>{
    res.json(users)
   })
   .catch((error)=>{
    res.json(error)
   })
}

export const UpdateUser=(req,res)=>{
  const id=req.params.id
  userSchemaModel.findByIdAndUpdate({_id:id}, {name:req.body.name, email:req.body.email, age:req.body.age})
  .then((users)=>{
    res.json(users)
   })
   .catch((error)=>{
    res.json(error)
   })
}

export const deleteuser=(req, res)=>{
  const id=req.params.id
  userSchemaModel.findByIdAndDelete({_id:id})
  .then((users)=>{
    res.json(users)
   })
   .catch((error)=>{
    res.json(error)
   })
}