"use client"
import { Suspense, useEffect, useState } from "react"
async function getData (){
    const res = await fetch("https://api.publicapis.org/entries" ,{cache:'force-cache'} )
    console.log("Pulling")
    return res.json() 
  }   

export default  async function Data () {
    const [data , setData] = useState([])
    useEffect( async ()=>{
         let D = await getData()
         console.log(D)
         setData(D[0])
        
    },[])
    return (
        <div>
        {data.map((post) => {
          return <h1>{post["API"]}</h1>
        })}
        </div>

)


}