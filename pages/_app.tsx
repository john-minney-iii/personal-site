import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";

// Components
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  const [currentTab, setCurrentTab] = useState<string>("about");
  pageProps["currentTab"] = currentTab;
  pageProps["setCurrentTab"] = setCurrentTab;

  return <>
    <Navbar {...pageProps} />
    <Component {...pageProps} />
  </>
}

export default MyApp
