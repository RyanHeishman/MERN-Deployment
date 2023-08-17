import { useState } from 'react'
import './App.css'
import DisplayAll from './components/DisplayAll'
import PetForm from './components/PetForm'
import DisplayOne from './components/DisplayOne'
import UpdatePet from './components/UpdatePet'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <h1>Pet Shelter</h1>
    <Routes>
      <Route element={<DisplayAll/>} path="/"/>
      <Route element={<PetForm/>} path="/pets/new"/>
      <Route element={<DisplayOne/>} path="/pets/:id/"/>
      <Route element={<UpdatePet/>} path="/pets/:id/edit"/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
