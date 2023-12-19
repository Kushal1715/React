import React, { Component } from 'react'
import pacman from './pacman.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={pacman} alt='pacman'/>
      </div>
    )
  }
}

export default Loading