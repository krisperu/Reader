import React from 'react'

function Authorpage({ author }) {
    const authorItem = author.map((auth) => (
        <div key={auth.id}>
            <div>{auth.first_name} {auth.last_name}</div>
        </div>
    ))

  return (
    <div>Authorpage {authorItem}</div>
  )
}

export default Authorpage