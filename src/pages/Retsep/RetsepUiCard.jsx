import React from 'react'

function RetsepUiCard({recipe}) {
  return (
    <div className='RetsepUiCard'>
      <img src={recipe.image}  alt="" />
      <h1>{recipe.label}</h1>
      <button className='BuyBtn'>Buy</button>
    </div>
  )
}

export default RetsepUiCard
