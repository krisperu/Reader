import React from 'react'
import { Link } from 'react-router-dom'
import AuthorCard from './AuthorCard'

function Authorpage({ author }) {
    const authorItem = author.map((auth) => (
      <AuthorCard key={auth.id} auth={auth} books={auth.books.map((b) => b.title)}/>
      
    ))

  return (
    <div className="author-card">{authorItem}</div>
  )
}

export default Authorpage

// function Authorpage({ author }) {
//   const authorItem = author.map((auth) => (
//       <div key={auth.id}>
//           {auth.first_name} {auth.last_name}
//       </div>
//   ))

// return (
// <div class="card w-75">
//   <div class="card-body">
//     <h5 class="card-title">{authorItem}</h5>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Button</a>
//   </div>
// </div>
// )
// }