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
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a Book</h2>
      <div className="tit">
        <label for="exampleFormControlInput1" className="form-label">
          Title:
          <input className="input"
            type="text"
            title="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div className="aut">
        <label for="exampleFormControlInput1" className="form-label">
          Author:
          <input 
            type="text"
            author="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
      </div>
      <div className="gen">
        <label for="exampleFormControlInput1" className="form-label">
          Genre:
          <input 
            type="text"
            genre="genre"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </label>
      </div>
      <div className="len">
        <label for="exampleFormControlInput1" className="form-label">
          Length:
          <input 
            type="number"
            length="length"
            placeholder="How many pages..."
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
      </div>
      <div className="tim">
        <label for="exampleFormControlInput1" className="form-label">
          Reading Time:
          <input 
            type="number"
            reading="reading"
            placeholder="day(s)"
            value={reading}
            onChange={(e) => setReading(e.target.value)}
          />
        </label>
      </div>
      <div className="rat">
        <label for="exampleFormControlInput1" className="form-label">
          Rating:
          <input 
            type="number"
            rating="rating"
            placeholder="1-5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
      </div>
      <div className="ima">
        <label className="form-label">
          Image URL:
          <input 
            type="text"
            image="image"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
      </div>
      <div className="des">
        <label className="form-label">
          Description: 
          <textarea
            description="description"
            value={description}
            placeholder="Book summary"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div className="com">
        <label className="form-label">
          Comment/Review: 
          <textarea
            comment="comment"
            placeholder="What did you think?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
      </div>
      <button className="btn btn-outline-light btn-lg" type="submit">Add to Books</button>
    </form>
  )
}

export default Formpage