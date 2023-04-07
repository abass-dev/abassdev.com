import './ContactForm.css'
import { useState } from 'react'
import { Notification, validateEmail, validateTextarea } from '../Helpers'
import emailjs from '@emailjs/browser';

const notyf = new Notification(3000)

export default function ContactForm({animation}) {
  const [userInput, setUserInputs] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isLoading, setLoading] = useState(false)
  
  function inputHander(e) {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    
    setUserInputs((prev) => {
      return {
        ...prev, [inputName]: inputValue
      }
    })
  }
  
  function onSubmitEmailHandler(event) {
    event.preventDefault()
    const valideEmail = validateEmail(userInput.email)
    
    if(userInput.name === '' || userInput.name === ' ') {
      return notyf.error("Username can't be blank")
    }
    if(userInput.email === '' || userInput.email === ' ') {
      return notyf.error("Message can't be blank")
    }
    if(!valideEmail.valid) {
      return notyf.error(valideEmail.message)
    }
    if(!validateTextarea('message', 5, 1000)) {
      return;
    }
    
    const { name, email, message } = userInput
    
    const templateParams = {
          user_name: name,
          user_email: email,
          message
    };
setLoading(true)
 emailjs.send('service_jebasxm','template_us13arq', templateParams, '9QHGoEPmDaBELUbZn')
	.then((response) => {
	   notyf.success('Message sent!');
	   userInput.name = ''
	   userInput.email = ''
	   userInput.message = ''
	   setLoading(false)
	}, (err) => {
	   notyf.error('FAILED...' + err);
	   setLoading(false)
	});
	
  }
  
  return (
    <div className='my-container ff-ubuntu'>
      <form onSubmit={onSubmitEmailHandler}  className='contact-form' id='contactForm'>
       <h2 className={`primary-font ${animation && 'lets-chat-anime'}`}>Let's Chat</h2>
        <div className='contact-form-input'>
          <label className='primary-font' for='name'>Name:</label>
          <input value={userInput.name} onChange={inputHander} placeholder="What's your name?" id='name' name='name'/>
        </div>
        <div className='contact-form-input'>
          <label className='primary-font' for='email'>Email:</label>
          <input onChange={inputHander} value={userInput.email} placeholder="e.g: john@gmail.com" id='email' name='email'/>
        </div>
        <div className='contact-form-input'>
          <label className='primary-font' for='message'>Message:</label>
          <textarea value={userInput.eamil} onChange={inputHander} placeholder="Hi, What's up?"  id='message' name='message'/>
        </div>
        <button disabled={isLoading? true : false} className='btn btn-secondary form-submit-button'>{isLoading? 'Sending...' : 'Send'}</button>
       </form>
    </div>
    )
}