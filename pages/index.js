import Nav from '../components/Nav'
import Image from 'next/image'
import Head from 'next/head'

function index() {
    return (
      <>
        <Head>
          <title>Home Page</title>
        </Head>
        <div style={{textAlign:"center"}}>
        <h1>This  is Home Page</h1>
        <Image src="https://images.unsplash.com/photo-1641305286305-9f267722fd0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Faveicon" width="600px" height="400px" />
        </div>

        {/* Internal Css */}
        <style jsx>
          {`
            h1{
              color:green;
              font-size:60px;
            }
          `}
        </style>
      </>
    )
  }
  
  export async function getServerSideProps() {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
    return { props: {} }
  }

export default index