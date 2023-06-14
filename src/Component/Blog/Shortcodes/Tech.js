import { useState, useEffect } from 'react'
// import Notification from '../../Notification'
import axios from 'axios'
import dateToReadable from '../../Util/dateToReadable'
import { setItemWithExpiration, getItemWithExpiration } from '../../Cache'
import { AlertMessage } from '../../Helpers'
// import { Loading } from '../../UI'
import URL from '../Helpers/URL'
import CodeSnippet from '../Helpers/CodeSnippet'

export default function Tech({ title, tech }) {
  const [posts, setPosts] = useState()
  // const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Get an item from localStorage and check for expiration
    const postsFromCache = getItemWithExpiration('posts')
    if (postsFromCache) {
      // Use the retrieved value if exist
      setPosts(postsFromCache)
    } else {
      // Value has expired or does not exist
      axios
        .get(`${URL.prefix}/tech?tech=${tech}`)
        .then((response) => {
          if (response) {
            setPosts(response.data)
            setItemWithExpiration(tech, response.data, 1440)
          }
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {})
    }
  }, [tech])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='md-title mt-3 h4 '>{title}</h2>
        </div>
        {posts ? (
          posts.map((value, index) => {
            return (
              <div key={value.id} className='col-12 card border-0 shadow-sm rounded-0 mb-4'>
                <div className='row card-body'>
                  <h1 className='h3'>
                    {value.id}# {value.title}
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
        ) : (
          <div className='col'>
            <AlertMessage type='error' message='Blog posts are not available yet due to some technical issues.' />
          </div>
        )}
      </div>
    </div>
  )
}
