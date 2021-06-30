import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <Head>
        <title>about</title>
      </Head>

      <main>
        <h1>
         <center>About page</center>
        </h1>
        <center>
        <Link href="/"><a>home │</a></Link>
            <Link href="/about"><a>about │</a></Link>
            <Link href="/service"><a>service │</a></Link>
            <Link href="/products/a001"><a>products</a></Link>
            </center>
      </main>
    </div>
  )
}
