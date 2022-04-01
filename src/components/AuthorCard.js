import React from 'react'

function AuthorCard({auth, books}) {
  return (
    <div key={auth.id} className="card w-75" >
    <div className="card-body">
      <h5 className="card-title">{auth.name}</h5>
      <div>Books:</div>
      <ul className="card-text">{books}</ul>
    </div>
  </div>
  )
}

export default AuthorCard