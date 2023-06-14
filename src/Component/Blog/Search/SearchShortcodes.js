
import './search.css'

export default function SearchShortcodes({ value, onChange}) {

  return (
    <div className='search search-shortcodes'>
      <input  value={value} onChange={e => onChange(e.target.value)} className='primary-text' placeholder='Find ShortCodes...' type='search' />
    </div>
  )
}
