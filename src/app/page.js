import Image from 'next/image'

async function getData (){

  const res = await fetch("https://api.publicapis.org/entries" ,{cache:'force-cache'} )
  console.log("Pulling")
  return res.json() 
} 
export default async function Home() {
  const res = await getData()
  //console.log(res)
  return (
    <div>
      Hello World
    </div>
    )
}
