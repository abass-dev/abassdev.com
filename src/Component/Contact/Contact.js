import ContactForm from '../ContactForm'

const Contact = () => {
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
      <ContactForm />
    </div>
  );
};

export default Contact;
