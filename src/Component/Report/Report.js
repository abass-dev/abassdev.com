import './report.css'

export default function Report({ report = 'Home/Home.js' }) {
  return (
    <div id='reportIssue' className='container mt-5'>
      <div className='card border-0 shadow-sm'>
        <div className='card-body'>
          <h5 className='h6 primary-fon'>Found a problem with this page?</h5>
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
                <a href='https://github.com/abass-dev/abassdev.com/fork'>Fork the repository</a>
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
