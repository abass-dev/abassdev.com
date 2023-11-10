"use client"

import axios from 'axios'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { BsFillSendFill, BsBug } from 'react-icons/bs'
import API from '../api'
import { validateUsername } from '../../helpers'
import { Alert, ProgressBar } from '../ui'

const Inspector = () => {
  
  const [loading, setLoading] = useState(false)
  const [repoData, setRepoData] = useState()
  const [service, setService] = useState('github')
  const [owner, setOwner] = useState('')
  const [repo, setRepo] = useState('')
  const [error, setError] = useState()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setRepoData(null)
    setLoading(true)
    setError(null)
    
    if(validateUsername(service) && validateUsername(owner) && validateUsername(repo))
    {
    await axios
      .get(`${API.REPO_INSPECTOR}${service}=${owner}/${repo}`)
      .then((response) => {
        setRepoData(response.data)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setError('Something went wrong! please make sure your repository exist.')
        setLoading(false)
      })
      
    } else {
        setError('Something went wrong! please make sure your repository exist.')
        setLoading(false)
    }
  }

  return (
    <div className='container mx-auto xpt'>
    <div className='flex justify-center gap-6 py-3 items-center bg-gray-400'>
     <Image className='rounded-2xl' alt='Repo Inspector logo' width={60} height={60} src='/assets/images/inspector-logo.png' />
          <h1 className='uppercase text-white text-xl'>
            <span style={{ color: '#d87803' }}>R</span>epo <span style={{ color: '#d87803' }}>I</span>nspector
          </h1>
    </div>
    
    <div className='my-3'>
      <h1 className='text-center uppercase mt-8'>A place to know more about your codebase.</h1>
      <div className='grid grid-cols-2 gap-8 px-4 xpt-70'>
      { error && <><div className='mt-8 col-span-2'><Alert message={error} type='error' link={`https://${service}.com/${owner}/${repo}`} linkDesk={error}/></div></> }
      { loading && <><div className='mt-8 col-span-2'><ProgressBar /></div></> }
       <div className='col-span-2 mt-6'>
       
<label for="inspect-am" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Select an option:</label>
<select 
value={service}
onChange={(e) => setService(e.target.value.trim())}
               id="inspect-am" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value='github' selected>Github</option>
  <option value="gitlab">Gitlab</option>
</select>

       </div>
       
       <div className='col-span-1'>
           <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="username"
          >
            Owner:{" "}
          </label>
          <input
            onChange={(e) => setOwner(e.target.value.trim())}
            name="name"
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="username"
            type="text"
            placeholder="Owner..."
          />
       </div>
       
       <div className='col-span-1'>
           <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="username"
          >
            Repo:{" "}
          </label>
          <input
           onChange={(e) => setRepo(e.target.value.trim())}
            name="name"
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="username"
            type="text"
            placeholder="Repo name..."
          />
       </div>
       
       <div className='col-span-2'>
        <button onClick={handleSubmit} className="flex items-center justify-center gap-2 bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <span>Inspect now</span>
          <BsBug size={20} />
        </button>
       </div>
   {repoData &&    
<div className='col-span-2'>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Result:
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Have a nice look at your inspection results</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Languages
                </th>
                <th scope="col" class="px-6 py-3">
                    Lines
                </th>
                <th scope="col" class="px-6 py-3">
                    Files
                </th>
                <th scope="col" class="px-6 py-3">
                    Code of lines
                </th>
            </tr>
        </thead>
        <tbody>
        {repoData.map((v, i) => {
           return (<tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {v.language}
                </th>
                <td class="px-6 py-4">
                    {v.lines}
                </td>
                <td class="px-6 py-4">
                    {v.files}
                </td>
                <td class="px-6 py-4">
                    {v.lineOfCodes}
                </td>
                <td class="px-6 py-4">
                {v.blanks}
                </td>
            </tr>
           
        )})}
        </tbody>
    </table>
</div>
</div>
   }
      <div className='divide-bottom col-span-2'></div>
       <div className='col-span-2'>
          <h2 className='text-xl mb-6'>About Repo Inspector:</h2>
          <div className='grid grid-cols-1 gap-6'>
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
       <div className='col-span-2'>
        <p>Credit: Thanks to <a className='text-blue-700' href='https://codetabs.com'>Code tabs</a></p>
       </div>
      </div>
      </div>
    </div>
    )
}

export default Inspector