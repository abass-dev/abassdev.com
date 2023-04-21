import './ContactForm.css'
import { useState } from 'react'
import { FaCloudMoon, FaSun } from 'react-icons/fa'
import { validateEmail, validateTextarea } from '../Helpers'
import Notification from '../Notification'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import AlertMessage from '../Helpers/AlertMessage'
import { TextInput, Button } from '../Auth/UI'
const notyf = new Notification(3000)

export default function ContactForm() {
  const [captchaResponse, setCaptchaResponse] = useState(null)
  const [message, setMessage] = useState({
    success: null,
    error: null,
  })
  const [invalidInput, setInvalidInput] = useState({
    name: null,
    email: null,
    message: null,
  })
  const [userInput, setUserInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setLoading] = useState(false)

  function inputHander(e) {
    const inputValue = e.target.value.trim()
    const inputName = e.target.name
    setInvalidInput({})
    setUserInputs((prev) => {
      return {
        ...prev,
        [inputName]: inputValue,
      }
    })
  }

  async function onSubmitEmailHandler(event) {
    event.preventDefault()

    const valideEmail = validateEmail(userInput.email)

    if (userInput.name.length <= 2) {
      setInvalidInput((prev) => {
        return {
          ...prev,
          name: true,
        }
      })
      return notyf.error("Your name shouldn't be less than 2 characters")
    }
    if (!valideEmail.valid) {
      setInvalidInput((prev) => {
        return {
          ...prev,
          email: true,
        }
      })
      return notyf.error(valideEmail.message)
    }

    if (!validateTextarea('message', 5, 1000)) {
      setInvalidInput((prev) => {
        return {
          ...prev,
          message: true,
        }
      })
      return
    }

    const { name, email, message } = userInput

    const templateParams = {
      user_name: name,
      user_email: email,
      reply_to: email,
      message,
    }
    setLoading(true)
    emailjs.send('service_jebasxm', 'template_us13arq', templateParams, '9QHGoEPmDaBELUbZn').then(
      (response) => {
        notyf.success('Message sent!')
        userInput.name = ''
        userInput.email = ''
        userInput.message = ''
        setLoading(false)
      },
      (err) => {
        setMessage({ success: null, error: 'Internal server error, technical issues!' })
        setLoading(false)
      },
    )
  }

  return (
    <div id='contactFormContainer' className='my-container ff-ubuntu'>
      <form onSubmit={onSubmitEmailHandler} className='contact-form shadow-sm' id='contactForm'>
        <h2 className='primary-font text-center'>Let's Chat</h2>
        {message.success && <AlertMessage message={message.success} type='success' />}
        {message.error && <AlertMessage message={message.error} type='error' />}
        <TextInput
          {...{
            inpuType: 'name',
            value: userInput.name,
            labelClassName: 'primary-font',
            onChange: inputHander,
            isInvalid: invalidInput.name,
          }}
        />
        <TextInput
          {...{
            inpuType: 'email',
            value: userInput.email,
            desableType: 'yes',
            labelClassName: 'primary-font',
            onChange: inputHander,
            isInvalid: invalidInput.email,
          }}
        />
        <div className='contact-form-input'>
          <label style={{ color: invalidInput.message && 'red' }} className='primary-font' htmlFor='message'>
            Message:
          </label>
          <textarea
            style={{ borderColor: invalidInput.message && 'red' }}
            value={userInput.eamil}
            onChange={inputHander}
            placeholder='e.g: Hi, I have a suggestion, feedback, opportunity...'
            id='message'
            name='message'
          />
        </div>
        <Button
          {...{
            text: 'Send',
            iconName: 'fa fa-paper-plane',
            isLoadingIconName: 'fa fa-spinner',
            isLoading: isLoading,
            isLoadingText: 'Sending...',
          }}
        />
      </form>
    </div>
  )
}
