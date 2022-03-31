import React from 'react'

function AuthorCard({auth, books}) {
    console.log(books)

  return (
    <div key={auth.id} className="card w-75" >
    <div className="card-body">
      <h5 className="card-title">{auth.name}</h5>
      <p className="card-text">{books}</p>
    </div>
  </div>
  )
}

export default AuthorCard