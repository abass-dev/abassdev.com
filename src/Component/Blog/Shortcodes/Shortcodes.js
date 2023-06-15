import Tech from './Tech'
import GoogleADS from '../../ADS/GoogleADS'
export default function Shortcodes() {
  return (
    <div className='container mt-4'>
      <h1 className='primary-text primary-font'>Shortcodes blog posts</h1>
      <p className='after-title'></p>
      <Tech title='ReactJS shortcodes' tech='ReactJs' />
      <Tech title='React Native shortcodes' tech='ReactNative' />
      <Tech title='PHP shortcodes' tech='PHP' />
      <div className='row'>
        <div className='col-12 mb-4'>
          <GoogleADS dataAdSlot='2747123581' />
        </div>
      </div>
    </div>
  )
}
