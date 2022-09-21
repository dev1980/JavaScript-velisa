import React from 'react'

const Book = ({book}) => {
   const{_id, name, author, description, price, image} = book;
  return (
    <div className='card'>
        <img  src={image} alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
        <button>Update</button>
        <button>Delete</button>
    </div>
  )
}

export default Book