import React from 'react'

function BookDetail({ detail }) {
  const deets = detail[0]
  return (
    <div key={deets.id}>
       <h1>{deets.title}</h1>
     </div>
  )
}

export default BookDetail