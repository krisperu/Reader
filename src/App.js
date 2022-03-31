import React, { useState, useEffect } from 'react'
import { Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import Bookspage from './components/Bookspage'
import BookDetail from './components/BookDetail'
import Authorpage from './components/Authorpage'
import Formpage from './components/Formpage'

function App() {
  const baseUrl = "http://localhost:9292"
  const [books, setBooks] = useState([])
  const [author, setAuthor] = useState([])
  const [bookCover, setBookCover] = useState([])
  
    useEffect(() => {
      fetch(baseUrl)
      .then(r => r.json())
      .then(setBookCover)
    }, [])

  useEffect(() => {
    fetch(baseUrl + '/books')
    .then(r => r.json())
    .then(setBooks)
  }, [])

  useEffect(() => {
    fetch(baseUrl + '/author')
    .then(r => r.json())
    .then(setAuthor)
  }, [])

  return (
    <div>
       <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage bookCover = {bookCover}/>
        </Route>
        <Route exact path="/books">
          <Bookspage books={books} setBooks={setBooks}/>
        </Route>
        <Route path = "/bookdetail">
          <BookDetail />
        </Route>
        <Route path = "/author">
          <Authorpage author = {author}/>
        </Route>
        <Route path = "/bookform">
          <Formpage books={books} setBooks={setBooks}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
