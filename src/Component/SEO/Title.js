import { Helmet, HelmetProvider } from 'react-helmet-async'
export default function Title({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}
