import PropTypes from 'prop-types'

function AlertMessage({ message, type }) {
  return (
    <div
      style={{
        borderLeft: `5px solid ${
          type === 'success' ? 'green' : type === 'error' ? 'red' : type === 'warning' ? 'yellow' : 'transparent'
        }`,
        marginBottom: '15px',
      }}
    >
      <div
        style={{
          opacity: 0.8,
          padding: '0 0 5px 5px',
          color: `${
            type === 'success'
              ? 'rgb(26, 156, 0)'
              : type === 'error'
              ? '#ff0000'
              : type === 'warning'
              ? '#fdf000'
              : 'transparent'
          }`,
        }}
      >
        <span className={`${type === 'success' ? 'text-info' : type === 'error' ? 'text-danger' : ''}`}>
          <i
            className={`fa fa-${
              type === 'warning'
                ? 'exclamation'
                : type === 'success'
                ? 'info-circle'
                : type === 'error'
                ? 'exclamation'
                : ''
            }`}
          ></i>{' '}
          {type === 'error' ? 'Warning' : type === 'success' ? 'Info' : ''}
        </span>
      </div>
      <p
        style={{
          backgroundColor: `${
            type === 'success'
              ? 'rgba(26, 156, 0, 0.3)'
              : type === 'error'
              ? '#ff000030'
              : type === 'warning'
              ? '#fdf00030'
              : 'transparent'
          }`,
          padding: '15px',
          margin: 0,
          fontSize: '14px',
        }}
      >
        {message}
      </p>
    </div>
  )
}

AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, // info, warning, error...
}
export default AlertMessage
