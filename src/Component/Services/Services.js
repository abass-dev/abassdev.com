import 'font-awesome/css/font-awesome.min.css'
import './Services.css'

export default function Services() {

  return (
    <div className='text-white mb-4 md-title container-lg'>
      <div className='row'>
        <div className='col-12'>
          <h1 id='services' className='mb-4 primary-font primary-text text-center'>
            Services
          </h1>
        </div>
        <div className='col-md-6 mb-4'>
          <div className='card   shadow-sm border-0'>
            <div className='card-body'>
              <p className='card-title text-secondary text-center'>
                <span className='work-icon fa fa-globe'></span>{' '}
              </p>
              <h2 className='text-center text-secondary'>Web development</h2>
              <p>
                I specialize in providing functional web services that include custom website development, WordPress
                development, e-commerce solutions, and more.
              </p>
            </div>
          </div>
        </div>
        <div  className='col-md-6 mb-4'>
          <div className='card border-0 shadow-sm border-0'>
            <div className='card-body'>
              <p className='card-title text-secondary text-center'>
                <span className='work-icon fa fa-line-chart'></span>{' '}
              </p>
              <h2 className='text-secondary text-center'>SEO and security</h2>
              <p>
                I offer top-notch solutions in both software security and SEO practices that can help boost the quantity
                and quality of traffic to your website.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6 mb-4'>
          <div className='card   border-0 shadow-sm border-0'>
            <div className='card-body'>
              <p className='card-title text-secondary text-center'>
                <span className='work-icon fa fa-paint-brush'></span>{' '}
              </p>
              <h2 className='text-secondary text-center'>Web Design</h2>
              <p>
                My web design services include creating stunning, intuitive websites that effectively represent your
                brand and corporate identity through exceptional UI/UX design.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6 mb-4'>
          <div className='card border-0 shadow-sm border-0'>
            <div className='card-body'>
              <p className='card-title text-secondary text-center'>
                <span className='work-icon fa fa-android'></span>{' '}
              </p>
              <h2 className='text-center text-secondary'>Mobile App</h2>
              <p>
                I create beautiful and functional apps for iOS and Android using React Native. With my expertise in this
                framework, I can bring your app idea to life and deliver top-notch results.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6 mb-4'>
          <div className='card   border-0 shadow-sm border-0'>
            <div className='card-body'>
              <p className='card-title text-secondary text-center'>
                <span className='work-icon fa fa-question'></span>{' '}
              </p>
              <h2 className='text-center text-secondary'>Problem solving</h2>
              <p>
                I possess a solid understanding of the problem-solving process and techniques to address issues. My
                approach is to always strive for the optimal solution to a problem, and I remain receptive to new ideas
                that could lead to better outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
