import React from 'react'
import { useRouter } from 'next/router'


const DynamicRoute = () => {
    const router = useRouter()
    const pathData = router.query
    return (
    <h1 style={{ color: "blueviolet", textAlign: "center" }}>
    name: {pathData.id}<br/>
    code: {pathData.code}
    </h1>
    )
   }
   export default DynamicRoute