import Tech from './Tech'
import GoogleADS from '../../ADS/GoogleADS'

export default function Shortcodes() {
  return (
    <div className='container mt-4'>
      <h1 className='primary-text primary-font'>Shortcodes posts</h1>
      <p className='after-title'></p>
      <Tech title='React Js' tech='ReactJs' />
      <Tech title='React Native' tech='ReactNative' />

      <div className='col-12 mb-4'>
        <GoogleADS dataAdSlot='2747123581' />
      </div>
    </div>
  )
}
