import { Helmet, HelmetProvider } from 'react-helmet-async';
function Meta({name, content}) {
  return (
    <Helmet>
      <meta name={name} content={content}/>
    </Helmet>
    )
}

export default Meta