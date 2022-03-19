import '../styles/globals.css'
import '../public/nprogress.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (<>
    <Nav/>  
    <Component {...pageProps } />
</>)
}

export default MyApp
