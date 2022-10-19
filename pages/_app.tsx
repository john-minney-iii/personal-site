import 'bootstrap/dist/css/bootstrap.css'
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [currentTab, setCurrentTab] = useState<string>("about");
  pageProps["setCurrentTab"] = setCurrentTab;

  return <Component {...pageProps} />
}

export default MyApp
