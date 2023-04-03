import Home from "./Component/Home/Home";
import TagManager from "react-gtm-module";
import React from 'react'

const tagManagerArgs = {
  gtmId: "G-N8ZTB9NPSP",
};

TagManager.initialize(tagManagerArgs);

export default function App() {
  return <Home />;
}
