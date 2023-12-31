import Container from './UI/Container';

import {useState} from 'react';
import '../assets/Contact.css'
import { validateEmail } from '../utils/helpers';

var userVisitCnt = 0;
var userVisitObj = [];

export default function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');  
  const [errorMessage, setErrorMessage] = useState('');  
  const [userMessage, setUserMessage] = useState('');    

  const handleInputChange = (e) => {

    setErrorMessage('');
    setUserMessage('');

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

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');

      return;
    }

    userVisitCnt = JSON.parse(localStorage.getItem("userVisitCnt"));
    if (userVisitCnt)
    {
      userVisitObj = JSON.parse(localStorage.getItem("userVisitObj"));
    }

    const newObj = {
      name: name,
      email: email,
      message: message
    }

    userVisitObj.push(newObj);
    userVisitCnt++;

    console.log(userVisitCnt);    
    console.log(userVisitObj);

    localStorage.setItem("userVisitCnt", userVisitCnt);
    localStorage.setItem("userVisitObj", JSON.stringify(userVisitObj));

    setUserMessage("Thank you for contacting me! I'll reach out to you soon!")
  }


  return (
    <Container>
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
        <button className="contact_button" type="submit">
          Submit
        </button>
      </form>
      <br></br>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      {userMessage && (
        <div>
          <p className="user-text">{userMessage}
          </p>
          <img className= "thank-img" src="../../images/thank.jpg"/>
        </div>
      )}
    </Container>
  );
}
