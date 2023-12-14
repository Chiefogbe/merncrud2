import React from 'react'
import User from './redux/components/User'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Add from './redux/components/Add'
import Update from './redux/components/Update'
import Create from './redux/components/Create'

const App = () => {
  return (
    <div>
     <Router>
        <Routes>
          <Route path='/Add' element={<Add/>}/>
          <Route path='/' element={<User/>}/>
          <Route path='/Update/:id' element={<Update/>}/>
        </Routes>
     </Router>
    </div>
  )
}

export default App
