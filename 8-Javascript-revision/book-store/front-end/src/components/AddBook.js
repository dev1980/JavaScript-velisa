import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AddBook = () => {
const navigate = useNavigate();
const[inputs, setInputs] = useState({
    name: "",
    author: "",
    description:"",
    price:"",
    
    image: "",
});

const[checked, setChecked] = useState(false)

const handleChange = (e)=>{
setInputs((prevState) =>({
    ...prevState,
    [e.target.name]: e.target.value
}));
// console.log(e.target.name, e.target.value)
}

const sendRequest = async () =>{
    await axios.post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description:String(inputs.description),
        price:Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked)
    }).then((res)=>res.data);
};

const handleSubmit = (e)=>{
e.preventDefault();
console.log(inputs, checked);
sendRequest().then(()=>navigate("/books"));
}

  return (
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

export default AddBook