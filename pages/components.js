import Head from 'next/head'
import Link from 'next/link'
import {Button,Box} from '@material-ui/core/';


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

export default function Home() {
  return (
    
    <div>
      <center>
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
      <br />
    <Button variant="contained" color="secondary">Hello</Button>
    </center>
    </div>
    
  )
}

