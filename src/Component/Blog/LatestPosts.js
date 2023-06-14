import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { ThemeContext } from '../../Context/'
import { dateToReadable } from '../Util'
import { getItemWithExpiration, setItemWithExpiration } from '../Cache'
import { AlertMessage } from '../Helpers'

export default function LatestPosts() {
  const [latestPosts, setLatestPosts] = useState(null)
  const latestPostsFormCache = getItemWithExpiration('latest_posts')
  // const { theme } = useContext(ThemeContext)

  useEffect(() => {
    if (latestPostsFormCache) {
      setLatestPosts(latestPostsFormCache)
    } else {
      axios
        .get('https://byteteachers.com/index.php/wp-json/wp/v2/posts?_embed&per_page=4')
        .then((response) => {
          setLatestPosts(response.data)
          setItemWithExpiration('latest_posts', response.data, 1440)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='primary-font text-center mb-4 primary-text'>Recent blog posts</h1>
        {latestPosts ? (
          latestPosts.map((post) => {
            return (
              <div className='col-md-6 mb-4' key={post.id}>
                <div className='card border-0 shadow-sm'>
                  <div className={`card-body border-bottom`}>
                    <a className='h4 mb-1' href={post.link}>
                      {post.title.rendered}
                    </a>
                    <br />
                    <br />
                    <small className='text-muted'>Author: Abass Dev</small>
                    <br />
                    <small className='text-muted'>Published on: {dateToReadable(post.date)}</small>
                  </div>
                  <div className='card-body'>
                    <p
                      className='mt-3'
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <AlertMessage type='error' message={'Recent posts are not available yet due to some technical issues.'} />
        )}
      </div>
    </div>
  )
}
