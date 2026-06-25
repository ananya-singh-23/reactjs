import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  
  function submithandler(e){
    e.preventDefault()
    console.log('form submitted')
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type="text"
         placeholder='Enter Name' 
         value={title} 
         onChange={(e)=>{
          settitle(e.target.value);
        
         }}
        />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
