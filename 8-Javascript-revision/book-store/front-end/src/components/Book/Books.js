import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Book from './Book';
const URL = "http://localhost:5000/books";

const fetchHandler = async()=>{
const data = await axios.get(URL).then((res)=> res.data);
return data;
}

const Books = () => {
const[books, setBooks] = useState();

useEffect(()=>{
    fetchHandler().then((data)=>setBooks(data.books))
}, []);
  return (
    <>
    <ul className='flex__card'>
        {
           books && books.map((book, i)=>(
            <li key={i}>
               <Book book = {book}/>
            </li>
           ))
        }
    </ul>
    </>
  )
}

export default Books