import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    title: "Don't Believe Everything You Think",
    author: '📄 Joseph Nguyen',
    img: 'https://d2i0w0hu6hvxgc.cloudfront.net/B0BJHG532P/532bb3b4/cover.jpeg',
    price: '220',
  },
  {
    title: 'The Alchemist',
    author: '📄 Paulo Coelho',
    img: 'https://d1b14unh5d6w7g.cloudfront.net/0722532938.01.S001.LXXXXXXX.jpg?Expires=1685124094&Signature=JvosOUS6f7pw4amAmmuay1esgYHiyaxO1iTD2YX2oiOuQsoqr9Lk60-59srZwimRtcfPJcJjhqmS3c5ihEoMPISWBi2zDoSyoZ-TaJUVVapHzeXylMkoYD5bEPP51a0FGEyir1PO2mxMHXCGf9xGsfyzY4nEbIzwKo~1DLJvGOw_&Key-Pair-Id=APKAIUO27P366FGALUMQ',
    price: '295',
  },
]
// const names = ['a', 'b', 'c']
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.title} />
      })}
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
