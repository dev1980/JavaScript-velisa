import React from 'react'
import '../style/Contact.css'
const Contact = () => {
  return (
    <div className='wrapper'>

      <div className='form'>
      <h1>Contact Us</h1> 
        <form name="contact" method="POST" netlify>
          <label htmlFor='name'>Full Name:</label>
          <input type="text" id='name' name='fname'/>
          <label htmlFor='email'>Email:</label>
          <input type="text" id='email' name='email'/>
          <label htmlFor='message'>Your Message:</label>
          <textarea id="message" name="message" placeholder="Write something.."></textarea>
          <br />
          <button type="submit">Submit</button>
          
        </form>
      </div>

    </div>
  )
}

export default Contact