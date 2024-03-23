import { getAdapter } from 'axios';
import React from 'react'
import { FaTemperatureHigh } from 'react-icons/fa'
import { BsDropletFill, BsDropletHalf } from 'react-icons/bs'
import { CgCompressV } from 'react-icons/cg'
import { AiTwotoneEye } from 'react-icons/ai'
import { TiWeatherWindy } from 'react-icons/ti'
import { GiSunflower } from 'react-icons/gi'
import { WiMoonAltWaningCrescent6 } from 'react-icons/wi'
// import PropTypes from 'prop-types'
function WeatherUi({ data }) {
  console.log(data)
  const sana = new Date();
  const yil = sana.getFullYear();
  const oy = sana.getMonth(); // 0 dan 11 gacha bo'lgan qiymat
  const kun = sana.getDate();
  const soat = sana.getHours();
  const minut = sana.getMinutes();
  const sekund = sana.getSeconds();
  // console.log(weekday)
  return (
    <div className='WeatherContener'>
      <div className='WeatherUiTop'>
        <h4>{data.datas.name} {soat}:{minut} GMT +05:00 holatiga</h4>
        <h1>{Math.round(data.datas.main.temp - 273.15)}°</h1>
        <h2>Masofa</h2>
        <img src="https://static7.tgstat.ru/channels/_0/97/97bf52049bf2f66de36c371481ee4c68.jpg" alt="" />
        <h3>Kun {Math.round(data.datas.main.temp - 273.15)} °  .  Tungi {Math.round(data.datas.main.feels_like - 273.15)} °</h3>
      </div>
      <div className='WeatherButtomContener'>
        <h1> {data.datas.name}    dagi bugungi ob-havo</h1>
        <h3 className='Harorat'>o'xshaydi<span>{Math.round(data.datas.main.temp - 273.15)}°</span>
        </h3>
        <div className='WeatherButtomCard'>

          <div className='WeatherButtomLeft'>
            <div className='weatherBox'><h1><FaTemperatureHigh className='icon' />Maks/Min </h1>   <h1>{Math.round(data.datas.main.temp_max - 273.15)}°</h1> </div>
            <div className='weatherBox'><h1><BsDropletHalf className='icon' />Namlik </h1>   <h1>{data.datas.main.humidity}%</h1></div>
            <div className='weatherBox'><h1><CgCompressV className='icon' />Bosim</h1>    <h1>{data.datas.main.pressure} mb</h1></div>
            <div className='weatherBox'><h1><AiTwotoneEye className='icon' />Korinish</h1>   <h1>{data.datas.visibility}</h1></div>
          </div>
          <div className='WeatherButtomRight'>
            <div className='weatherBox'>  <h1><TiWeatherWindy className='icon' /> Shamol</h1>    <h1>{data.datas.wind.speed} /soat</h1></div>
            <div className='weatherBox'>  <h1><BsDropletFill className='icon' /> Shudring</h1>   <h1>2°</h1></div>
            <div className='weatherBox'>  <h1><GiSunflower className='icon' />UB indeksi</h1>   <h1>0 / 11</h1></div>
            <div className='weatherBox'>  <h1><WiMoonAltWaningCrescent6 className='icon' />Oy fazasi</h1>     <h1 >ko'payib boruvchi yarim oy</h1></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherUi

// WeatherUi.PropTypes={
//     data:PropTypes.object
// }