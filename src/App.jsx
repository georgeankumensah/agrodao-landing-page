import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// import pages here
import Home from './pages/Home'
import Layout from './layout/Layout'


function App() {

  return (
    <div >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          </Route>
      </Routes>

    </div>
  )
}

export default App
