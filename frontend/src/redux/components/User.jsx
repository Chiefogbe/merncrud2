import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'

const User = () => {

  const [users, setUser]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/api/user/create/')
    .then((res)=>{
      setUser(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  const handledelete=(id)=>{
    axios.delete('http://localhost:4000/api/user/deleteuser/'+id)
    .then((res)=>{
      window.location.reload()
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
      
      <div className='bg-red-500 p-4 '>
        <div>
         <Link to='/Add'><button className='bg-green-500 p-2'>Add</button></Link>
        
         
        </div>

        <div className='bg-white p-3 mt-3 flex justify-between'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Age</h4>
          <h4>Action</h4>
        </div>
      </div>

      {users.map((user, key)=>{
        return( 
          <div key={key} className='flex justify-between p-1'>
          <h4>{user.name}</h4>
          <h4>{user.email}</h4>
          <h4>{user.age}</h4>
          <Link to={`/Update/${user._id}`}><button className='bg-green-500'>Update</button></Link>
          <button className='bg-red-500' onClick={(e)=>handledelete(user._id)}>Delete</button>
        </div>)
      })}
    </div>
  )
}

export default User
