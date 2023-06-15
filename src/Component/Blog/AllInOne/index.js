import { Nav, Footer } from '../../'
import { useLocation } from 'react-router-dom'

import { useContext, useState, useEffect, useRef } from 'react'
import { ThemeContext } from '../../../Context'
import Notification from '../../Notification'
import axios from 'axios'
import GoogleADS from '../../ADS/GoogleADS'
import dateToReadable from '../../Util/dateToReadable'
import { setItemWithExpiration, getItemWithExpiration } from '../../Cache'
import { AlertMessage } from '../../Helpers'
import { Loading } from '../../UI'
import URL from '../Helpers/URL'
import CodeSnippet from '../Helpers/CodeSnippet'
import SearchShortcodes from '../Search/SearchShortcodes'

import '../blog.css'

export default function AllInOne() {
  const [posts, setPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const location = useLocation()

  useEffect(() => {
    if (location.state?.searchQuery) {
      setQuery(location.state.searchQuery)
    }
    // Get an item from localStorage and check for expiration
    const postsFromCache = getItemWithExpiration('AllInOne')
    if (postsFromCache) {
      // Use the retrieved value if exist
      setPosts(postsFromCache)
      setIsLoading(false)
    } else {
      // Value has expired or does not exist
      axios
        .get(`${URL.prefix}/tech/all`)
        .then((response) => {
          if (response) {
            setPosts(response.data)
            setItemWithExpiration('AllInOne', response.data, 1440)
            setIsLoading(false)
            //   console.log(response.data);
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

  const [storedTheme, setStoredTheme] = useState('light')
  const localStorage = window.localStorage
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [localStorage, theme])

  const metaData = {
    title: 'Learn All in one page',
    description: 'Useful shortcodes',
  }

  return (
    <>
      <Nav metaData={metaData} active={'all-in-one'} />
      <div className='saerch-box'>
        <SearchShortcodes value={query} onChange={setQuery} />
      </div>
      <div id={storedTheme && storedTheme}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 mb-3 mt-4'>
              <h1 className='primary-text primary-font'>All Shortcodes</h1>
              <p className='after-title'></p>
            </div>
            {posts ? (
              posts
                .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
                .map((value, index) => {
                  return (
                    <div
                      id={`${value.title.replaceAll(' ', '-')}-${value.id}`}
                      key={value.id}
                      className='col-12 card border-0 shadow-sm rounded-0 mb-5'
                    >
                      <div className='row card-body'>
                        <h1 className='h3'>
                          <a href={`#${value.title.replaceAll(' ', '-')}-${value.id}`}>
                            {value.id}#. {value.title}
                          </a>
                        </h1>
                        <div className='col-md-6'>
                          <CodeSnippet snippetType={value.snippet_type} code={value.codesniper} />
                        </div>
                        <div className='col-md-6 mt-4 mt-lg-0'>
                          <p className='card-text'>
                            <strong>Description: </strong>
                            {value.description}
                          </p>
                          <p className='text-secondary'>Published on: {dateToReadable(value.created_at)}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
            ) : !isLoading ? (
              <div className='col'>
                <AlertMessage type='error' message='Blog posts are not available yet due to some technical issues.' />
              </div>
            ) : (
              ''
            )}

            <div className='col-12'>
              <GoogleADS dataAdSlot='2747123581' />
            </div>
          </div>
        </div>
        <Footer report='Blog/AllInOne/index.js' />
      </div>
    </>
  )
}
