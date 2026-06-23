import React from 'react'
import Card from './component/card.jsx'
import Navbar from './component/navbar.jsx'

const App = () => {

  const user = "John Doe" // holds the name of the user
  return (
       <>
        <Navbar /> {/* render Navbar component (component name must be PascalCase) */}
        {/* here className is used to apply CSS styles to the element. Define styles in a CSS file. */}
        <h1 className='h111'>My React App</h1>
        <p>This is a simple React application.</p>
        <p>Welcome {user} React development!</p> {/* embeds the value of `user` in JSX */}
       
        <Card />
        <Card />
        <Card />
      </>
  )
}

export default App
