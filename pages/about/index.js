import Head from 'next/head'

const About=()=>{
    return (
      <div>
        <Head>
          <title>About Page</title>
        </Head>
        <h1>Hello About!</h1>
      </div>
    )
}
  
export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  return { props: {} }
}
  
export default About