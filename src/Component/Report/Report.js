import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeProvider'
import './report.css'

export default function Report({ report = 'Home/Home.js' }) {
  const { theme } = useContext(ThemeContext)
  const [storedTheme, setStoredTheme] = useState('light')
    useEffect(() => {
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [theme, localStorage])

  return (
    <div id='reportIssue' className='container pt-4'>
      <div className='card border-0 shadow-sm'>
        <div className='card-body'>
          <h5 className='primary-font'>Found a problem with this page?</h5>
          <div className='card-text'>
            <ul>
              <li>
                <a href='https://github.com/abass-dev/abassdev.com/issues/new?'>Report issue on github</a>
              </li>
              <li>
                <a
                  href={`mailto:abass@abassdev.com?subject=Report issues https://github.com/abass-dev/abassdev.com/blob/master/src/Component/${report}&body=Hi Abass Dev, I found some issues with this component... [${report}]`}
                >
                  Report issue by email
                </a>
              </li>
              <li>
                <a href={`https://github.com/abass-dev/abassdev.com/edit/master/src/Component/${report}`}>
                  Edit this page on github
                </a>
              </li>
              <li>
                <a href='https://github.com/abass-dev/abassdev.com/fork'>Fork this repository</a>
              </li>
              <li>
                <a href={`https://github.com/abass-dev/abassdev.com/blob/master/src/Component/${report}`}>
                  Code source
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
