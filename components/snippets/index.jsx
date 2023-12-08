"use client"

import ReactSnippets from "./reactSnippets";
import PHPSnippets from "./PHPSnippets";
import ReactNativeSnippets from "./reactNativeSnippets";
import { useState } from "react";
import axios from "axios";


const Snippets = () => {
    const [data, setData] = useState({})

    const fetchData = async () => {

    }

    return (
        <div className="md:px-20 lg:40 dark:text-gray-100 dark:bg-gray-900 xpt">
            <ReactSnippets />
            <PHPSnippets />
            <ReactNativeSnippets />
        </div>
    );
}

export default Snippets;

export { ReactSnippets, PHPSnippets, ReactNativeSnippets }