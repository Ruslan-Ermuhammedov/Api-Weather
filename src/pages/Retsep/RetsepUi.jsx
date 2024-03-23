import React from 'react'
import RetsepUiCard from './RetsepUiCard';

function RetsepUi({data}) {
    console.log(data)
  return (
    <div className='RetsepUi'>
        {data.map((item,index)=>(
             <RetsepUiCard key={index} {...item} /> 

        ))}
    </div>
  )
}

export default RetsepUi;

