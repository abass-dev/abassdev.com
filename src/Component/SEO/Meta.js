import { Helmet } from 'react-helmet';

function Meta({name, content}) {
  return (
    <Helmet>
      <meta name={name} content={content}/>
    </Helmet>
    )
}

export default Meta