function Book(props) {
  const { title, img, author, price, id } = props
  // console.log(props)
  return (
    <>
      <article className="book">
        <span className="number">#{id}</span>
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <h4>{author}</h4>
        <h4>{price}</h4>
      </article>
    </>
  )
}

export default Book
