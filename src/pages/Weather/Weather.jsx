import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import '../Weather/Weather.css'
import axios from 'axios'
import { StateContext } from '../../App'
import { weatherInitialState, weatherReducer } from '../../reducer/weatherReducer/weatherReducer'
import { InfinitySpin } from 'react-loader-spinner'
import WeatherUi from './WeatherUi'
function Weather() {
  const { query, setQuery } = useContext(StateContext)
  const Api_Key = "75ced55da7174c4764fbb1897da6af5b";
  const [state, dispatch] = useReducer(weatherReducer, weatherInitialState)
  useEffect(() => {
    function fetchData() {
      dispatch({ type: "LOADING" })
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${Api_Key}`)
        .then(res => {
          dispatch({ type: "SUCCESS", payload: { datas: res.data } })
        }
        )
        .catch(() => dispatch({ type: "REJECTED", payload: "Something went wrong" }))
    }
    fetchData()
  }, [query])
  return (
    <>
      <div>
        {state.isLoading &&(  <h1 className='Loader'>
          <InfinitySpin
            width='400px'
             height='400px'
            color="#4fa94d"
          />
        </h1>)
          }
        {state.error && <h1>{state.error} </h1>}
        {state.isSuccess && <WeatherUi data={state.datas} />}
      </div>
    </>
  )
}

export default Weather
