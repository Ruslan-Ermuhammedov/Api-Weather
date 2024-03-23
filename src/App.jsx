import { createContext, useContext, useReducer, useState } from 'react'
import Navbar from './loyaut/Navbar/Navbar'
import Home from './pages/Home/Home'
import Weather from './pages/Weather/Weather'
import { Route, Routes } from 'react-router-dom'
import Retsep from './pages/Retsep/Retsep'

export const StateContext=createContext()
function App() {
  const [query, setQuery] = useState("toshkent")

  return (
    <>
    <StateContext.Provider value={{query,setQuery}}>

      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='weather' element={<Weather/>}/>
      <Route path='retsep' element={<Retsep/>}/>
     </Routes>
    </StateContext.Provider>
    </>
  )
}

export default App
