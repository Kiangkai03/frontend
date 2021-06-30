import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Products = () => {
    const router = useRouter()
    const pathData = router.query
    return(
        <div>
            <h1>
             <center>Product Name: {pathData.id}</center> 
            </h1>
            <center>
            <Link href="/"><a>home │</a></Link>
            <Link href="/about"><a>about │</a></Link>
            <Link href="/service"><a>service │</a></Link>
            <Link href="/products/a001"><a>products</a></Link>
            </center>
        </div>
    )

}
export default Products