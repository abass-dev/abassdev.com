import { useContext, useState, useEffect, useRef } from 'react'
import { Nav, Footer } from '../../'
import { ThemeContext } from '../../../Context'
import Notification from '../../Notification'
import axios from 'axios'
import GoogleADS from '../../ADS/GoogleADS'
import { setItemWithExpiration, getItemWithExpiration } from '../../Cache'
import URL from '../../Helpers/URL'
import { AlertMessage } from '../../Helpers'
import { Loading } from '../../UI'

const Proverbs = () => {
  const [storedTheme, setStoredTheme] = useState('light')
  const localStorage = window.localStorage
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    //console.log(URL);
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [localStorage, theme])

  const [posts, setPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Get an item from localStorage and check for expiration
    const postsFromCache = getItemWithExpiration('proverbs')
    if (postsFromCache) {
      // Use the retrieved value if exist
      setPosts(postsFromCache)
      setIsLoading(false)
    } else {
      // Value has expired or does not exist
      axios
        .get(URL.proverbs)
        .then((response) => {
          if (response) {
            setPosts(response.data)
            setItemWithExpiration('proverbs', response.data, 1440)
            setIsLoading(false)
          }
        })
        .catch((error) => {
          setIsLoading(false)
          console.log(error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [])

  if (isLoading) {
    return <Loading />
  }

  const metaData = {
    title: 'Life & Proverbs',
    description: 'Proverbs and Life',
  }
  return (
    <div id={storedTheme && storedTheme}>
      <Nav metaData={metaData} active={'proverbs'} />
      <div className='container'>
        <div className='row'>
          <div className='col-12 mb-3 mt-4'>
            <h1 className='primary-text primary-font'>Life & Proverbs</h1>
            <p className='after-title'></p>
          </div>
          {posts ? (
            posts.map((value, index) => {
              return (
                <div key={value.id} className='col-12 p-3 card border-0 shadow-sm rounded-0 mb-5'>
                  <div className='card-body'>
                    <div className='col-md-6 mt-lg-0'>
                      <p className='card-text'>
                        <strong>
                          <span style={{ fontSize: 30 }} className='primary-text primary-font'>{`${value.id}. `}</span>{' '}
                          {value.description}
                        </strong>
                      </p>
                      <p className=''>By Abass Dev</p>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className='col'>
              <AlertMessage type='error' message='Proverbs are not available yet due to some technical issues.' />
            </div>
          )}
          <div className='col-12 mb-4'>
            <GoogleADS dataAdSlot='2747123581' />
          </div>
        </div>
      </div>
      <Footer report='Blog/Proverbs/Proverbs.js' />
    </div>
  )
}

export default Proverbs
