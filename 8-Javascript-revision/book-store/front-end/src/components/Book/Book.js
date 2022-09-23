import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
const Book = ({book}) => {
   const{_id, name, author, description, price, image} = book;
   const navigate = useNavigate();
   const deleteHandler = async ()=>{
    await axios.delete(`http://localhost:5000/books/${_id}`)
    .then((res)=> res.data)
    .then(()=>navigate("/"));
   };
  return (
    <div className='card'>
        <img  src={image} alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
        <Link to={`/books/${_id}`} ><button>Update</button></Link>
        <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default Book