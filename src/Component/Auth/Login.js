import { useContext, useEffect, useState } from 'react';
import Nav from '../Nav';
import { ThemeContext } from '../../Context/ThemeProvider';
import Footer from '../Footer';
import LoginForm from './LoginForm/LoginForm';
import { getItemWithExpiration, setItemWithExpiration } from '../Cache';
import axios from 'axios';

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const [storedTheme, setStoredTheme] = useState('light');
  const localStorage = window.localStorage;

  useEffect(() => {
    let sthm = localStorage.getItem('theme');
    if (sthm) {
      setStoredTheme(sthm);
    }
  }, [theme]);

  const metaData = {
    title: 'Login',
  };

  return (
    <>
      <div id={storedTheme && storedTheme}>
        <Nav metaData={metaData} active={'login'} />
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-md-8 pb-4'>
              <h1 className='primary-text primary-font'>Login</h1>
              <p className='after-title'></p>
              <p className='text-center ff-ubuntu'>
                <span className='h1 primary-text'>T</span>his page is exclusively for administrative use.
              </p>
            </div>
            <div className='col-12'>
              <LoginForm />
            </div>
          </div>
        </div>
        <Footer desableContacForm={true} />
      </div>
    </>
  );
}
