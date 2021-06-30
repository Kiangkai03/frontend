import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      <Head>
        <title>ออกแบบ</title>
      </Head>

      <main>
         <h1><center> Index page</center></h1>
          <br />
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

