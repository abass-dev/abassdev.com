import { useContext, useState, useEffect, useRef } from 'react'
import { Nav, Footer } from '../../../'
import { ThemeContext } from '../../../../Context'
import Notification from '../../../Notification'
import axios from 'axios'
import GoogleADS from '../../../ADS/GoogleADS'
import dateToReadable from '../../../Util/dateToReadable'
import { setItemWithExpiration, getItemWithExpiration } from '../../../Cache'
import { AlertMessage } from '../../../Helpers'
import { Loading } from '../../../UI'
import URL from '../../Helpers/URL'
import CodeSnippet from '../../Helpers/CodeSnippet'

export default function ReactNativeInOne(props) {
  const [posts, setPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Get an item from localStorage and check for expiration
    const postsFromCache = getItemWithExpiration('ReactNativeInOne')
    if (postsFromCache) {
      // Use the retrieved value if exist
      setPosts(postsFromCache)
      setIsLoading(false)
    } else {
      // Value has expired or does not exist
      axios
        .get(`${URL.prefix}/tech?tech=ReactNative`)
        .then((response) => {
          if (response) {
            setPosts(response.data)
            setItemWithExpiration('ReactNativeInOne', response.data, 1440)
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

  const [storedTheme, setStoredTheme] = useState('dark')
  const localStorage = window.localStorage
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [localStorage, theme])

  const metaData = {
    title: 'Learn React Native in one page | Useful and short codes',
    description: 'Learn React Native from shortcodes | short and useful React Native posts',
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div id={storedTheme && storedTheme}>
      <Nav metaData={metaData} active={'reactjs-in-one'} />
      <div className='container'>
        <div className='row'>
          <div className='col-12 mb-3 mt-4'>
            <h1 className='primary-text primary-font'>React Native in one</h1>
            <p className='after-title'></p>
          </div>
          {posts ? (
            posts.map((value, index) => {
              return (
                <div key={value.id} className='col-12 card border-0 shadow-sm rounded-0 mb-5'>
                  <div className='row card-body'>
                    <div className='col-md-6'>
                      <CodeSnippet snippetType={value.snippet_type} code={value.codesniper} />
                    </div>
                    <div className='col-md-6 mt-4 mt-lg-0'>
                      <h1 className='h3'>
                        <a href={`#${value.title.replaceAll(' ', '-')}-${value.id}`}>
                          {value.id}#. {value.title}
                        </a>
                      </h1>
                      <p id={`${value.title.replaceAll(' ', '-')}-${value.id}`} className='card-text'>
                        <strong>Description: </strong>
                        {value.description}
                      </p>
                      <p className='text-secondary'>Published on: {dateToReadable(value.created_at)}</p>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className='col'>
              <AlertMessage type='error' message='Blog posts are not available yet due to some technical issues.' />
            </div>
          )}

          <div className='col-12 mb-4'>
            <GoogleADS dataAdSlot='2747123581' />
          </div>
        </div>
      </div>
      <Footer report='AllInOne/ReactNativeInOne/ReactNativeInOne.js' />
    </div>
  )
}
