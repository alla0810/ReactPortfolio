import {useState} from 'react';
import '../assets/Contact.css'


export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');  

  const handleInputChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email')
    {
      setEmail(inputValue);
    }
    else if (inputType === 'name')
    {
      setName(inputValue);      
    }
    else if (inputType === 'message')
    {
      setMessage(inputValue);
    }

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

  }


  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleFormSubmit}>
        Name: 
        <br></br>
        <input className="contact_input" value={name} name="name" onChange={handleInputChange} type="text" placeholder=""/>        

        Email address:
        <br></br>
        <input className="contact_input" value={email} name="email" onChange={handleInputChange} type="email" placeholder=""/>
        Message:
        <br></br>        
        <input className="contact_message" value={message} name="message" onChange={handleInputChange} type="text" placeholder=""/>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
