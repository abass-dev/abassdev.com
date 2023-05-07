import { useState } from 'react'
import { FaCloudMoon, FaSun } from 'react-icons/fa'
import { validateEmail, validateTextarea } from '../Helpers'
import Notification from '../Notification'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import AlertMessage from '../Helpers/AlertMessage'
import { TextInput, Button } from '../Auth/UI'
import './ContactForm.css'
import '../Auth/UI/ui.css'

const notyf = new Notification(3000)

export default function ContactForm() {
  const [captchaResponse, setCaptchaResponse] = useState(null)
  const [message, setMessage] = useState({
    success: null,
    error: null,
  })
  const [invalidInput, setInvalidInput] = useState({
    name: null,
    subject: null,
    email: null,
    message: null,
  })
  const [userInput, setUserInputs] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  })
  const [isLoading, setLoading] = useState(false)

  function inputHander(e) {
    const inputValue = e.target.value
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

    if (userInput.subject.length <= 2) {
      setInvalidInput((prev) => {
        return {
          ...prev,
          subject: true,
        }
      })
      return notyf.error("Subject shouldn't be less than 2 characters")
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

    const { name, subject, email, message } = userInput

    const templateParams = {
      user_name: name.trim(),
      to_name: 'Abass Dev',
      from_name: name.trim(),
      from_subject: subject.trim(),
      from_email: email.trim(),
      reply_to: email.trim(),
      message: message.trim(),
    }
    setLoading(true)
    emailjs.send('service_jebasxm', 'template_mduuz2e', templateParams, '9QHGoEPmDaBELUbZn').then(
      (response) => {
        notyf.success('Message sent!')
        userInput.name = ''
        userInput.subject = ''
        userInput.email = ''
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
            type: 'text',
            name: 'subject',
            label: 'Subject:',
            placeholder: 'E.g: Opportunity',
            value: userInput.subject,
            labelClassName: 'primary-font',
            onChange: inputHander,
            isInvalid: invalidInput.subject,
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
            placeholder='E.g: Hi, I have a suggestion, feedback, opportunity...'
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
