import React from 'react'

const card = (props) => {
  return (
    <div>
      <div className="card">
        <img id="image" src={props.image} alt={props.item} />
        <h1>{props.item}</h1>
        <p>{props.description}</p>
        <button>more about it</button>
      </div>
    </div>
  )
}

export default card
