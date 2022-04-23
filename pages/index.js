import Link from 'next/link'
import Image from 'next/image'
import Me from '../public/h1.jpg'


/* <Image src='/h1.jpg' width={600} height={600} alt='' /> */
export default function Home() {
  return (
   <div>
     <Link href="/chanchitos">Ir a Chanchitos</Link>
      <p>Holaaaa</p>
      <Image src={Me} width={600} height={600} alt=''/>
   </div>
  )
}
