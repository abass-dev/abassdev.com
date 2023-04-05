import './NotFound.css'

const NotFound = () => {
  return (
    <div className='notfound-container'>
      <h1>Oops 😕</h1>
      <h2 className='text-danger'>Error: 404</h2>
      <p>Page not found</p>
      <p>Something is wrong? contact the <a href='mailto:abass@abassdev.com'>owner</a></p>
      <p className='primary-font'>OR</p>
      <a href='/'>Go to the home page</a>
    </div>
    )
}

export default NotFound