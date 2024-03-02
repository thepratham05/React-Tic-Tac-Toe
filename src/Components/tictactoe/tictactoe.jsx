import React from 'react'
import './tictactoe.css'
import circle_icon from '../Assets/circle.png'
import cross_ion from '../Assets/cross.png'

const TicTacToe = () => {
  return (
    <div className='container'>
        <h1 className='title'>Tic-Tac-Toe Game In <span>React</span></h1>
        <div className='board'>

        </div>
        <button className='reset'>Play Again?</button>
    </div>
  )
}

export default TicTacToe