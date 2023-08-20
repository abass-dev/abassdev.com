import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import GoogleADS from '../ADS/GoogleADS'
import { ThemeContext } from '../../Context/ThemeProvider'
//import Notification from '../Notification'
import { Loading } from '../UI'
import inspectorLogo from '../../assets/images/inspector-logo.png'
import { AlertMessage } from '../Helpers'
import { Nav, Footer } from '../'
import './inspector.css'

const Inspector = () => {
  //const notyf = new Notification(3000)
  const [loading, setLoading] = useState(false)
  const [repoData, setRepoData] = useState()
  const [service, setService] = useState('github')
  const [owner, setOwner] = useState('')
  const [repo, setRepo] = useState('')
  const [error, setError] = useState()
  const { theme } = useContext(ThemeContext)
  const [storedTheme, setStoredTheme] = useState('light')

  useEffect(() => {
    let sthm = localStorage.getItem('theme')
    if (sthm) {
      setStoredTheme(sthm)
    }
  }, [theme])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setRepoData(null)
    setLoading(true)
    setError(null)
    await axios
      .get(`https://api.codetabs.com/v1/loc/?${service}=${owner}/${repo}`)
      .then((response) => {
        setRepoData(response.data)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setError('Something went wrong! please make sure you repo exist.')
        setLoading(false)
      })
  }

  return (
    <>
      <Nav
        metaData={{
          title: 'Repo Inspector',
          description:
            'Repo Inspector is an innovative project designed to empower users with in-depth insights into their GitHub orGitLab repositories.',
        }}
      />
      <div id={storedTheme && storedTheme} className='inspector'>
        <div className='header bg-secondary container'>
          <img alt='Repo Inspector logo' width='60px' height='60px' src={inspectorLogo} />
          <h1 className='text-light ff-ubuntu'>
            <span style={{ color: '#d87803' }}>R</span>epo <span style={{ color: '#d87803' }}>I</span>nspector
          </h1>
        </div>
        <form onSubmit={handleSubmit} className='inspector-form container'>
          <h2 className='text-center primary-font py-4'>Inspect Your Repository</h2>
          <div className='inputs'>
            <select
              value={service}
              onChange={(e) => setService(e.target.value.trim())}
              class='form-select'
              aria-label='Default select example'
            >
              <option selected>github</option>
              <option>gitlab</option>
            </select>
          </div>
          <div className='repo-inputs'>
            <input onChange={(e) => setOwner(e.target.value.trim())} type='text' placeholder='Owner...' />
            <span>/</span>
            <input onChange={(e) => setRepo(e.target.value.trim())} type='text' placeholder='Repo name...' />
          </div>
          <div className='submit-btn-container my-4'>
            <button className='btn btn-secondary' type='submit'>
              {loading ? 'Wait for result...' : 'Inspect now'}
            </button>
          </div>
          {error && <AlertMessage type='error' message={error} />}
        </form>
        {repoData ? (
          <div className='p-2'>
            <table className='table table-dark table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Language</th>
                  <th scope='col'>Lines</th>
                  <th scope='col'>Files</th>
                  <th scope='col'>Lines of code</th>
                  <th scope='col'>Blanks</th>
                </tr>
              </thead>
              <tbody>
                {repoData.map((v, i) => {
                  return (
                    <tr>
                      <th scope='row'>{v.language}</th>
                      <td>{v.lines}</td>
                      <td>{v.files}</td>
                      <td>{v.linesOfCode}</td>
                      <td>{v.blanks}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : loading ? (
          <Loading />
        ) : (
          ''
        )}

        <Description />
        <Footer report='RepoInspector/Inspector.js' />
      </div>
    </>
  )
}

const Description = () => {
  return (
    <div className='container pt-5 ff-ubuntu'>
      <div className='card border-0 shadow-sm'>
        <div className='card-body'>
          <h2>Introduction</h2>
          <p>
            Repo Inspector is an innovative project designed to empower users with in-depth insights into their GitHub
            or GitLab repositories. With Repo Inspector, you gain a powerful tool that goes beyond the surface level,
            allowing you to unlock a wealth of information about your codebase.
          </p>
          <p>
            Imagine being able to effortlessly inspect your repository and unveil its true potential. Repo Inspector
            enables you to delve into the intricacies of your project, providing you with comprehensive metrics and
            detailed analysis. By leveraging the power of advanced algorithms and cutting-edge technology, Repo
            Inspector equips you with the knowledge you need to make informed decisions and drive your project forward.
          </p>
          <p>
            Upon inspecting a repository with Repo Inspector, you gain access to a plethora of invaluable information.
            Dive deep into the codebase and discover the exact number of lines of code, offering you an overview of its
            complexity and scale. Uncover the technologies utilized within the repository, providing crucial insights
            into the underlying frameworks, programming languages, and tools employed.
          </p>
          <p>
            But it doesn't stop there. Repo Inspector also reveals the number of files present in your repository,
            allowing you to grasp its structure and organization at a glance. Furthermore, the project offers additional
            metrics and analytics, including commit history, code contributors, and overall project activity. With this
            wealth of information, you can better understand the evolution of your codebase, identify key contributors,
            and make informed decisions to improve efficiency and productivity.
          </p>
          <p>
            Repo Inspector boasts a user-friendly interface, making it effortless for developers of all levels to
            explore and analyze their repositories. Whether you're a seasoned professional or just starting out, Repo
            Inspector empowers you to gain a comprehensive understanding of your project's inner workings, facilitating
            better collaboration, decision-making, and optimization.
          </p>
          <p>
            Take control of your repository's destiny with Repo Inspector. Uncover hidden gems, identify areas for
            improvement, and harness the true potential of your codebase. Elevate your development process, enhance
            productivity, and ensure the success of your projects with this invaluable inspection tool.
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <GoogleADS dataAdSlot='2747123581' />
        </div>
      </div>
    </div>
  )
}

export default Inspector
