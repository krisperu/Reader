import React, { useState, useEffect } from 'react'
import { Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import Bookspage from './components/Bookspage'
import BookDetail from './components/BookDetail'
import Formpage from './components/Formpage'

function App() {
  const baseUrl = "http://localhost:9292"
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch(baseUrl + '/books')
    .then(r => r.json())
    .then(setBooks)
  }, [])

  return (
    <div>
       <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/books">
          <Bookspage books = {books}/>
        </Route>
        <Route path = "/bookdetail">
          <BookDetail />
        </Route>
        <Route path = "/bookform">
          <Formpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
