import Home from "./Component/Home/Home";
import React from 'react'
import { useContext, useEffect } from 'react'
import { ThemeContext } from './Context/ThemeProvider'

export default function App() {
  const Home = React.lazy(() =>
    new Promise((resolve) =>
      resolve(import("./Component/Home/Home"))
    )
  );
  return <Home />;
}
