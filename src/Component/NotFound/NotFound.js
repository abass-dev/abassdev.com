import './NotFound.css'
import { Nav } from '../'

const NotFound = ({ pathName }) => {
  return (
    <>
      <Nav metaData='404 NotFound' />
      <div class='container-lg bg-white d-flex align-items-center justify-content-center vh-100'>
        <div class='text-center row'>
          <div class='col-md-6'>
            <img src='https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg' alt='' class='img-fluid' />
          </div>
          <div class='col-md-6 mt-5'>
            <p class='fs-3'>
              {' '}
              <span class='text-danger'>Opps!</span> Page not found.
            </p>
            <code>{pathName}</code>
            <p class='lead'>The page you’re looking for doesn’t exist.</p>
            <a href='/' class='btn btn-primary'>
              Go Home
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
