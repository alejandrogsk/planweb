import "../styles/main.scss";
import TagManager from "react-gtm-module";
import React from "react";



const tagManagerArgs = {
    gtmId: process.env.GTM_ID,
};

function MyApp({ Component, pageProps }) {
    
    React.useEffect(() => { TagManager.initialize(tagManagerArgs); });

    return (
      <Component {...pageProps} />
    );
}

export default MyApp;
