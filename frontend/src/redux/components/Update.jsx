import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Update = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [name, setName]=useState()
  const [email, setEmail]=useState()
  const [age, setAge]=useState()

  useEffect(()=>{
    axios.get('http://localhost:4000/api/user/update/'+ id)
    .then((res)=>{
      console.log(res)
      setEmail(res.data.email)
      setName(res.data.name)
      setAge(res.data.age)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:4000/api/user/updateuser/'+id, {name, email, age})
    .then((res)=>{
      console.log(res.data)
       navigate('/')
    }) 
    .catch((error)=>{
      console.log(error)
    })
    }
  return (
    <div>
        <h2>Update User</h2>
        <form className='flex flex-col gap-3 border-black' onSubmit={handleSubmit}>
        <input type="text" placeholder='name...' onChange={(e)=>setName(e.target.value)} value={name}/>
        <input type="email" placeholder='email...' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input type="number" placeholder='age...' onChange={(e)=>setAge(e.target.value)} value={age}/>
        <button type='submit' className='bg-green-700'>Update</button>
      </form>

    </div>
  )
}

export default Update
