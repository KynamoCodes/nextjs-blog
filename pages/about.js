import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <h1>About Page</h1>
        <p>This is the about page</p>
      </Layout>
    )
  }