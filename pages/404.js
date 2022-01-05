import Link from 'next/link'
import Head from 'next/head'

const Error = () => {
    return (
        <>
            <Head>
            <title>Error Page</title>
            </Head>

            <h1>404. This page is not exist</h1>               
            <Link href="/">Go to Home</Link>
        </>
    )
}

export default Error
