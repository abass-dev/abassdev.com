import '../AllInOne/InOne.css'
import Notification from '../../Notification'
import { useRef } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeSnippet = ({ code }) => {
  const codeRef = useRef(null)
  const notyf = new Notification(2000, 'center', 'center')

  const handleCopy = () => {
    const textArea = document.createElement('textarea')
    textArea.value = code
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    notyf.success('Copy!')
  }

  return (
    <div style={{ position: 'relative' }}>
      <SyntaxHighlighter language='jsx' showLineNumbers style={vscDarkPlus} ref={codeRef}>
        {code}
      </SyntaxHighlighter>
      <button
        type='button'
        data-bs-toggle='tooltip'
        data-bs-placement='right'
        title='Copy'
        className='btn btn-secondary'
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '8px', // adjust the top position as needed
          right: '8px', // adjust the right position as needed
          border: 'none',
        }}
      >
        <i className='copy-code-button fa fa-copy'></i>
      </button>
    </div>
  )
}

export default CodeSnippet
