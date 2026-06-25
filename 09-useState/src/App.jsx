import React, { useState } from 'react'

const App = () => {
  const [Num, setNum] = useState(10)
  function btnclick(){
  setNum(Num+1)}

  function btndoclick(){
  setNum(prev =>(prev+1))
  setNum(prev =>(prev+1))}

  return (
    <div>
      <h1>hey number {Num}</h1>
      <button onClick={()=>{btnclick()}}>click me!</button>
      <button onDoubleClick={()=>{btndoclick()}}>click me double!</button>
    </div>
  )
}

export default App
