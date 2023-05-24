import React, { useRef, useContext, useState, useEffect } from 'react'
import { Footer } from '../'
import Nav from '../Nav/Nav'
import { ThemeContext } from '../../Context/ThemeProvider'
import { birthday } from '../Helpers'
import Title from '../SEO/Title'
import { SingleSlideAnim } from '../Util/Util'
import aboutImage from '../../assets/images/abassdev-about.webp'
import './MyStory.css'

function MyStory({ pathName }) {
  const storyRef = useRef(null)
  SingleSlideAnim(storyRef, '.storyRefId')
  const { theme } = useContext(ThemeContext)
  const [storedTheme, setStoredTheme] = useState('light')
  const localStorage = window.localStorage

  useEffect(() => {
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [theme, localStorage])

  const metaData = {
    title: 'My story',
  }
  return (
    <div id={pathName ? storedTheme : ''}>
      {pathName && <Nav metaData={metaData} active={'my-story'} />}
      <div itemscope itemtype='http://schema.org/Person' className={`${pathName && 'container-lg'} pt-4`}>
        <div className='container'>
          <div className='row ff-ubuntu'>
            <div className='col-md-12'>
              <h1 className={`mb-4 primary-text primary-font ${!pathName && 'text-center'}`}>My story</h1>
              {pathName && <p className='text-center after-title'></p>}
              <div id='myStory' ref={storyRef} about='Who is Abass Dev'>
                <div className='shadow-sm storyRefId slide-first'>
                  {pathName && (
                    <div className='image-bg'>
                      <img src={aboutImage} className='img-fluid story-img' alt='Who is Abass Dev?' />
                    </div>
                  )}
                  <div id='storyRefId' className='p-3'>
                    <h1 itemProp='name' id='whoisabassdev'>
                      Who is Abass Dev?
                    </h1>
                    <p itemProp='description'>
                      Abass Ben Cheik, who goes by the name Abass Dev, is a talented full-stack developer with a passion
                      for building exceptional web applications. He was born in{' '}
                      <span birthPlace='Niamey, Niger'> Niamey, Niger</span>, on{' '}
                      <span birthDate='02-02-1994'> February 2, 1994</span>. He is currently {birthday('02-02-1994')}
                    </p>
                    <p itemProp='description'>
                      At a young age of 14 in 2009, Abass Dev became fascinated with the world of web development.
                      However, he had no idea where to start. It wasn't until he met a friend on Skyrock, a social
                      networking site, in 2011, that he was introduced to the world of blogging and tasked with
                      administering a Wix-created blog. It was this experience that sparked his curiosity and ignited
                      his passion for web development.
                    </p>
                    {pathName ? (
                      <>
                        <p itemProp='description'>
                          In 2012, Abass Dev created his first blog on the Blogspot platform, but soon discovered its
                          limitations. Determined to expand his knowledge and capabilities, he began to explore the
                          depths of web development using languages such as HTML, CSS, JavaScript, PHP, SQL, and others.
                        </p>
                        <p>
                          With his dedication and hard work, Abass Dev honed his skills and became a self-taught{' '}
                          <span jobTitle='full-stack developer'>full-stack developer</span>.
                        </p>
                          <p>
                          Today, he has an impressive
                          portfolio of work that showcases his expertise in building dynamic, responsive, and visually
                          appealing web applications.
                        </p>
                        <p>
                          In addition to his technical abilities, Abass Dev has a keen eye for design and aesthetics,
                          which allows him to create stunning and functional user interfaces. He is always learning and
                          staying up-to-date with the latest trends and technologies in the ever-evolving field of web
                          development.
                        </p>
                        <p itemProp='description'>
                          Abass Dev is a true testament to the power of self-education and perseverance. His passion and
                          commitment to his craft have led him to become a respected figure in the web development
                          community, and a source of inspiration for aspiring developers around the world.
                        </p>
                      </>
                    ) : (
                      <a className='mb-2' href='/my-story'>
                        Read more...
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {pathName && <Footer report='MyStory/MyStory.js' />}
    </div>
  )
}

export default MyStory
