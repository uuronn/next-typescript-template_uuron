import type { NextPage } from 'next'
import Card from '../components/shared/Card'
import App from '../components/hookApp'
import Timer from '../components/timer'

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello Next.js</h1>
      <Card />
      
      <App/>
      <App/>
      <Timer/>
    </>
  )
}

export default Home
