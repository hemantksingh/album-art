// This file is not required, if not created Nextjs uses one internally that looks just like below.
// Nextjs uses this file for every page that is rendered in your application. This can also be used
// to load things like global CSS styles
import './globals.scss'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp