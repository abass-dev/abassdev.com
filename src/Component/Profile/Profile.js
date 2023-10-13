// import Typical from 'react-typical'
import 'font-awesome/css/font-awesome.min.css'
import pdfLink from '../../assets/pdf/abass_cv_en.pdf'
import ProfilePicture from '../../assets/images/profile-pic2.webp'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './Profile.css'
// import { AlertMessage } from '../Helpers'
export default function Profile() {
  return (
    <div id='apropos' className='mb-5 container-lg'>
      <div className='row'>
        <div className='col-12 mt-4'>
          {/** <AlertMessage type='success' message="What's new? " link='/proverbs' linkDesk="Check out our new feature."/> **/}
        </div>
        <div className='col-12'>
          <div id='about' className='row py-3 mt-4 rounded align-items-center'>
            <div className='d-flex  pb-4 justify-content-center align-items-center profileImageRefId  col-md-4'>
              <img
                alt={'Abass Dev'}
                width={300}
                height={300}
                className='fluid text-center rounded'
                src={ProfilePicture}
              />
            </div>
            <div itemscope='' itemtype='http://schema.org/Person' className='col-md-8 text-center'>
              <div className='ff-ubuntu'>
                <h1 className='primary-font fw-bold text-start primary-text'>About me</h1>
                <p className='after-title'></p>
                <p className='lead text-start'>
                  A passionate web and mobile app developer with over 6 years of experience in programming and the
                  internet.{' '}
                </p>
                <p className='lead text-start'>
                  In my free time, I enjoy sharing my experiences through my blog{' '}
                  <a href='https://byteteachers.com'>byteteachers.com</a> and contributing to the{' '}
                  <a href='https://github.com/abass-dev'>open-source</a> community. I am also the creator of the{' '}
                  <a href='https://github.com/nigaphp'>NigaPHP</a> framework.
                </p>

                <div className='col-12 mt-4 text-center profile-socieal-links'>
                  <div className='row align-items-center'>
                    <div className='col-md-8'>
                      <a aria-label='my facebook' href='https://m.facebook.com/abassthedev'>
                        <i className='text-secondary fa fa-facebook'></i>
                      </a>
                      <a aria-label='my Twitter' href='https://twitter.com/abass_dev'>
                        <i className='text-secondary fa fa-twitter'></i>
                      </a>
                      <a aria-label='my github' href='https://github.com/abass-dev'>
                        <i className='text-secondary fa fa-github'></i>
                      </a>
                      <a aria-label='my linkedin' href='https://www.linkedin.com/in/abassdev'>
                        <i className='text-secondary fa fa-linkedin'></i>
                      </a>
                      <a aria-label='instagram' href='https://www.instagram.com/abassdev'>
                        <i className='text-secondary fa fa-instagram'></i>
                      </a>
                      <a aria-label='my pinterest' href='https://www.pinterest.com/abassdev'>
                        <i className='text-secondary fa fa-pinterest'></i>
                      </a>
                      <a aria-label='contact me' href='/contact'>
                        <i className='text-secondary fa fa-envelope'></i>
                      </a>
                    </div>
                    <div className='col-md-4 mt-4 mt-md-0'>
                      <a href={pdfLink} download className='btn btn-sm btn-secondary text-white'>
                        Download CV <span className=' fa fa-download'></span>
                      </a>
                    </div>
                    <div className='col-12 mt-4'>
                      <a className='mb-4 link' href='/my-story'>
                        Read more about me...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
