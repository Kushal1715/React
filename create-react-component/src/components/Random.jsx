import React from 'react'

function Random() {
  const num = ()=>{
    return Math.floor(Math.random() * 6) + 1;
  }
  return (
    <div>
      <h1 style={{'backgroundColor':'green', color:'white'}}>The random number is {num()}</h1>
    </div>
  )
}

export default Random