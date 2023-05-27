import Tech from './Tech'

export default function Shortcodes() {
  return (
    <div className='container mt-4'>
      <h1 className='primary-text primary-font'>Shortcodes blog posts</h1>
      <p className='after-title'></p>
      <Tech title='ReactJS shortcodes' tech='ReactJs' />
      <Tech title='React Native shortcodes' tech='ReactNative' />
      <Tech title='PHP shortcodes' tech='PHP' />
    </div>
  )
}
