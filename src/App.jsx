import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './Components/NavBar'
import { PokeHome } from './Pages/PokeHome'
import { Pokemon1 } from './Pages/Pokemon1'
import { Pokemon2 } from './Pages/Pokemon2'
import { Pokemon3 } from './Pages/Pokemon3'
import { Pokemon4 } from './Pages/Pokemon4'
import { Pokemon5 } from './Pages/Pokemon5'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <h1 className='title'>POKEDEX</h1>
        <Routes>
          <Route path='/' element={<PokeHome/>}/>
          <Route path='/Pokemon1' element={<Pokemon1/>}/>
          <Route path='/Pokemon2' element={<Pokemon2/>}/>
          <Route path='/Pokemon3' element={<Pokemon3/>}/>
          <Route path='/Pokemon4' element={<Pokemon4/>}/>
          <Route path='/Pokemon5' element={<Pokemon5/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


