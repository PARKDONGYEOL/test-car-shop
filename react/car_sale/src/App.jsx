import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './rayout/UserLayout'
import Title from './rayout/Title'
import Sales from './rayout/Sales'
import Car from './rayout/Car'
import Register from './rayout/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
          <Route path='' element={<Title />}/>
          <Route path='sales' element={<Sales />}/>
          <Route path='car' element={<Car />}/> 
          <Route path='register' element={<Register />}/> 
        </Route>
      </Routes>
    </>
  )
}

export default App
