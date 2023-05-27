import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    title: 'Dopamine Detox',
    author: 'Thibaut Meurisse',
    img: 'https://m.media-amazon.com/images/I/413tVFk--xS.jpg',
    price: '₹190',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    img: 'https://m.media-amazon.com/images/I/518qiLwlQ0L._SX427_BO1,204,203,200_.jpg',
    price: '₹295',
  },
  {
    title: 'The Monk Who Sold His Ferrari',
    author: 'Robin Sharma',
    img: 'https://m.media-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg',
    price: '₹178',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    img: 'https://m.media-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg',
    price: '₹248',
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    img: 'https://m.media-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg',
    price: '₹247',
  },
  {
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    img: 'https://m.media-amazon.com/images/I/41EwKa8jf2L._SX343_BO1,204,203,200_.jpg',
    price: '₹200',
  },
]
// const names = ['a', 'b', 'c']
function BookList() {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.title} />
      })}
    </section>
  )
}
function handleClickInput() {
  alert('button is clicked')
}

function handleFormSubmission(e) {
  e.preventDefault()
  console.log('form is submitted')
}

function handleFormInput(e) {
  console.log(e)
  console.log(e.target)
  console.log(e.target.name)
  console.log(e.target.value)
  console.log('Input is being changed')
}
const EventExamples = () => {
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          onChange={handleFormInput}
          type="text"
          name="example"
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <button onClick={handleClickInput}>Click ME</button>
      </div>
    </section>
  )
}

function Book(props) {
  const { title, img, author, price } = props
  console.log(props)
  return (
    <article className="book">
      <h2>{title}</h2>
      <img src={img} alt={title} />

      <h4>{author}</h4>
      <h4>{price}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
