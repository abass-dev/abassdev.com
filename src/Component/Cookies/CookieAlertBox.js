import CookieConsent from 'react-cookie-consent'
export default function CookieAlertBox() {
  return (
    <CookieConsent
      style={{
        background: '#ffffffee',
        color: '#00000099',
      }}
      location='bottom'
      buttonText='Okay'
      cookieName='abassdev.com-cookies'
      expires={365}
      buttonStyle={{
        backgroundColor: '#4984e1',
        color: '#ffffff',
        display: 'flex',
        alignSelf: 'right',
        borderRadius: '25px'
      }}
    >
      <small>
        This website use cookies to improve your browsing experience and analyze site traffic. See our{' '}
        <a href='/privacy-policy'> privacy policy</a> for details.
      </small>
    </CookieConsent>
  )
}
