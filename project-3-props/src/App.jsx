import React from 'react'
import Card from './component/card'
const App = () => {
  return (
    <div className='Parent' >
      {Card({ item: "rock", image: "/src/images/rock-emoji.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas." })}
      {Card({ item: "paper", image: "/src/images/paper-emoji.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas." })}
      {Card({ item: "scissors", image: "/src/images/scissors-emoji.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas." })}
    </div>
  )
}

export default App
