import React, { useState } from 'react'

const App = () => {
  const [Num,SetNum] = useState(0)
  function inc(){
    SetNum(Num+1)
  }
  function dec(){
    SetNum(Num-1)
  }
  function inc5(){
    SetNum(Num+5)
  }
  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={inc}>inc by 1</button>
      <button onClick={dec}>dec by 1</button>
      <button onClick={inc5}>inc by 5</button>
    </div>
  )
}

export default App
