import React from 'react'

const Create = () => {
  return (
    <div>
        <h2>Add User</h2>
        <form className='flex flex-col gap-3 border-black'>
        <input type="text" placeholder='name...' />
        <input type="text" placeholder='email...' />
        <input type="number" placeholder='age...' />
      </form>
    </div>
  )
}

export default Create
