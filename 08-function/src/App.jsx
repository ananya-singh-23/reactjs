import React from 'react'

const App = () => {

  function btnclicked(){
    console.log("button clicked");
  }

  function inputchanging(val){
    console.log(val);
  }
  return (
    <div>
      <h1>hello, Sarthak</h1>
      <button onClick={btnclicked}>change user</button>

      <input onChange={function(elem){inputchanging(elem.target.value)}}type="text" placeholder='enter name' />
    </div>
  )
}

export default App
