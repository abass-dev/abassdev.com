import CookieConsent from "react-cookie-consent";
export default function CookieAlertBox() {
  return (
    <CookieConsent
      style={{
        background: "#ffffffee",
        color: "#00000099",
      }}
      enableDeclineButton
      location="bottom"
      buttonText="Accept"
      cookieName="abassdev.com-cookies"
      expires={365}
    >
      <small>
        We use Google cookies to improve your browsing experience and analyze
        site traffic.
        See our <a href="/privacy-policy"> privacy policy</a> for details.
      </small>
    </CookieConsent>
  );
}
