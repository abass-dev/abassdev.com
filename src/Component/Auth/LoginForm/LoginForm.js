import { useState } from 'react'
import { getItemWithExpiration, setItemWithExpiration } from '../../Cache'
import axios from 'axios'
import { AlertMessage, URL, validateEmail } from '../../Helpers'
import Notification from '../../Notification'
import '../UI//ui.css'
import TextInput from '../UI/TextInput'
import Button from '../UI/Button'

const notyf = new Notification(2000)

export default function LoginForm() {
  const [userInput, setUserInputs] = useState({
    email: '',
    password: '',
  })
  const [admin, setAdmin] = useState(null)
  const [invalidInput, setInvalidInput] = useState({
    email: false,
    password: false,
  })
  const [isLoading, setLoading] = useState(false)
  const [message, setMessage] = useState({ success: null, error: null })

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
  function onSubmitEmailHandler(event) {
    event.preventDefault()
    const valideEmail = validateEmail(userInput.email)
    if (!valideEmail.valid) {
      setInvalidInput((prev) => {
        return {
          ...prev,
          email: true,
        }
      })
      return notyf.error(valideEmail.message)
    }

    if (!userInput.password) {
      setInvalidInput((prev) => {
        return {
          ...prev,
          password: true,
        }
      })
      return notyf.error('Password is required')
    }
    setLoading(true)
    const { email, password } = userInput
    axios
      .post(URL.admin, { email: email.trim(), password: password.trim() })
      .then((response) => {
        const data = response.data
        if (data.status === 'failed') {
          setMessage({ success: null, error: 'Invalid credentials' })
          setLoading(false)
        } else {
          setAdmin(data.response)
          setMessage({ success: 'Login successfuly', error: null })
          setLoading(false)
        }
      })
      .catch((error) => {
        setMessage({
          success: null,
          error: 'Internal server error, technical issues!',
        })
        console.log(error)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div id='loginFormContainer' className='my-container ff-ubuntu'>
      <form onSubmit={onSubmitEmailHandler} className='ui-form bg-white shadow-sm p-4 card border-0' id='loginForm'>
        {message.success && <AlertMessage type='success' message={message.success} />}
        {message.error && <AlertMessage type='error' message={message.error} />}
        <i aria-label='Login logo' className='ui-form-icon fa fa-user'></i>

        <TextInput
          {...{
            inpuType: 'email',
            labelClassName: 'primary-font',
            desableType: 'yes',
            isInvalid: invalidInput.email,
            onChange: inputHander,
            value: userInput.email,
          }}
        />
        <TextInput
          {...{
            inpuType: 'password',
            labelClassName: 'primary-font',
            isInvalid: invalidInput.password,
            onChange: inputHander,
            value: userInput.password,
          }}
        />
        <Button
          {...{
            text: 'Login',
            className: 'primary-font',
            isLoading: isLoading,
            isLoadingText: 'Wait...',
          }}
        />
      </form>
    </div>
  )
}
