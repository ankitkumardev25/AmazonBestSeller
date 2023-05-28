import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'
// const names = ['a', 'b', 'c']
function BookList() {
  return (
    <>
      <h1>Amazon Must Reads</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.title} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
