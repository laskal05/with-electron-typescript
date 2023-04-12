import React from "react";
import Layout from "../components/Layout";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
    return (
        <Layout title="About | Next.js + TypeScript + Electron Example">
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;