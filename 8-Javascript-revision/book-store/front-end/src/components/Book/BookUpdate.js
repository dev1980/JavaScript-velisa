import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



const BookUpdate = () => {
const[inputs, setInputs] = useState();
const id = useParams().id;
const[checked, setChecked] = useState(false)
const navigate = useNavigate();
useEffect(()=>{
    const fetchHandler = async () =>{
        await axios.get(`http://localhost:5000/books/${id}`)
        .then((res)=> res.data)
        .then((data)=> setInputs(data.book));
    };

    fetchHandler();
   
    
    
}, [id])

const sendRequest = async ()=>{
    await axios.put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price:Number(inputs.price),
        image: String(inputs.image),
        available:Boolean(inputs.available)
    }).then((res)=> res.data)
}

const handleSubmit = (e) =>{
e.preventDefault();
sendRequest().then(()=> navigate("/books"))
}

const handleChange = (e) =>{
setInputs((prevState) =>(
    {
        ...prevState,
        [e.target.name]: e.target.value
    }
))
}



  return (
    <div>

        {
            inputs && (
            <div className='form'>
    <form onSubmit={handleSubmit}>
<label htmlFor="name">Name:</label>
<input type="text"  id="name" name="name" value = {inputs.name} onChange = {handleChange}/>

<label htmlFor="author">Author:</label>
<input type="text" id="author" name="author" value = {inputs.author} onChange = {handleChange}  />

<label htmlFor="des">Description:</label>
<input type="text" id="des" name="description"  value = {inputs.description} onChange = {handleChange}/>

<label htmlFor="price">Price:</label>
<input type="text" id="price" name="price" value = {inputs.price} onChange = {handleChange} />

<label htmlFor="image">Image Link:</label>
<input type="text" id="image" name="image" value = {inputs.image} onChange = {handleChange}/>
<br />


<input type="checkbox" checked={checked} id="available" name="available" onChange={()=>setChecked(!checked)} />

<br />
<input type="submit" />
</form>
</div>
            )
        }
    </div>
        
  )
}

export default BookUpdate;

// get book by id, // axios to fetch data, // we need useState and useEffect // useNavegate