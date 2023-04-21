import Home from './Component/Home/Home'
import React from 'react'
export default function App() {
  const Home = React.lazy(() => new Promise((resolve) => resolve(import('./Component/Home/Home'))))
  return <Home />
}
