import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Index</h1>
      <Image src="mangom.jpg" width={100} height={100} alt="망곰 이미지" />
    </div>
  )
}

export default Home
