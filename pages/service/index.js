import Head from 'next/head'
import Link from 'next/link'


export default function service() {
  return (
    <div>
      <Head>
        <title>บริการ</title>
      </Head>
      <main>
        <h1>
          <center>Service page</center>
        </h1>
        <br />
        <center>
            <Link href="/"><a>home │</a></Link>
            <Link href="/about"><a>about │</a></Link>
            <Link href="/service"><a>service │</a></Link>
            <Link href="/products/a001"><a>products page</a></Link>
            </center>
      </main>
    </div>
  )
}

