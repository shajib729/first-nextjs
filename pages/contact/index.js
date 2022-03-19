import Nav from "../../components/Nav"
import Head from "next/head"

const Contact=()=>{
    return (
      <div>
        <Head>
          <title>Contact Page</title>
        </Head>

        <h1>Hello Contact!</h1>
      </div>
    )
}
  
export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })
  return { props: {} }
}
  
export default Contact