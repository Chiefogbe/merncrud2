import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {

  const navigate=useNavigate()

  const [name, setName]=useState()
  const [email, setEmail]=useState()
  const [age, setAge]=useState()

  const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:4000/api/user/post', {name, email, age})
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
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 border-black'>
        <input type="text" placeholder='name...' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='email...' onChange={(e)=>setEmail(e.target.value)} />
        <input type="number" placeholder='age...' onChange={(e)=>setAge(e.target.value)} />
        <button type='submit' className='bg-purple-950'>Add</button>

      </form>

      <Link to='/'><button className='bg-green-600'>Home</button></Link>
    </div>
  )
}

export default Add
