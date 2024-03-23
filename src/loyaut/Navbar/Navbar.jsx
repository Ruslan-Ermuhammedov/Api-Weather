import React, { useContext, useRef } from 'react'
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom'
import {BiSearchAlt} from 'react-icons/bi'
import { StateContext } from '../../App'
function Navbar() {
  const {query,setQuery}=useContext(StateContext)
  const inputRef = useRef()
  const getWeatherDataHandler = e => {
    e.preventDefault();
    setQuery(inputRef.current.value)
  }
  return (
    <nav className='Navbar'>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/weather"}>Weather</NavLink>
      <NavLink to={"/retsep"}>Retsep</NavLink>
      <form className='formaWeather' onSubmit={getWeatherDataHandler}>
        <input ref={inputRef} type="text" />
      </form>

    </nav>
  )
}

export default Navbar
