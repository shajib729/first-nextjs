import Nav from "../../components/Nav"
import Head from 'next/head'

const About=()=>{
    return (
      <div>
        <Head>
          <title>About Page</title>
        </Head>
      
        <Nav/>
        <h1>Hello About!</h1>
      </div>
    )
  }
  
export default About