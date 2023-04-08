import ContactForm from '../ContactForm'
import Helmet from 'react-helmet'

const Contact = ({pathName}) => {
  return (
    <div style={{
        paddingTop: '60px', 
        width: '100%',
        minHeight: '75vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center',
        backgroundColor: '#fff'
     }}>
      {pathName && <Helmet><title>Abass Dev - Contact me</title></Helmet>}
      <ContactForm />
    </div>
  );
};

export default Contact;
