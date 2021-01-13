import Link from 'next/Link'
import Layout from "../../components/layout";
import Head from 'next/Head'

export default function firstPost() {
    return (
       <>
           <Layout>
           <Head>
               <title>first post</title>
           </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
           </Layout>
           </>
    )
}