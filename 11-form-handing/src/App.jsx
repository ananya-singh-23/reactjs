import React from 'react'

const App = () => {
  
  function submithandler(e){
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type="text" placeholder='Enter Name'  />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
