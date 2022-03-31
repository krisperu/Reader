import React, { useState } from 'react'

function Formpage({ books, setBooks }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [length, setLength] = useState('')
  const [reading, setReading] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')

  function handleAddBook(newBookItem) {
    setBooks([...books, newBookItem])
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      title ,
      author ,
      genre ,
      length ,
      reading_time: reading,
      image ,
      description ,
      rating ,
      comment ,
    };
    fetch("http://localhost:9292/books", {
          method: "POST",
          headers: {
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      })
      .then((r) => r.json())
      .then((newBook) => handleAddBook(newBook));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input 
          type="text"
          title="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Author:
        <input 
          type="text"
          author="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label>
        Genre:
        <input 
          type="text"
          genre="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </label>
      <label>
        Length:
        <input 
          type="number"
          length="length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </label>
      <label>
        Reading Time:
        <input 
          type="number"
          reading="reading"
          value={reading}
          onChange={(e) => setReading(e.target.value)}
        />
      </label>
      <label>
        Image URL:
        <input 
          type="text"
          image="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          description="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Rating:
        <input 
          type="number"
          rating="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <label>
        Comment/Review:
        <textarea
          comment="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button type="submit">Add to Books</button>
    </form>
  )
}

export default Formpage