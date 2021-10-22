import type {NextPage} from 'next'
import Card from '../components/ui/card'


const HomePage: NextPage = () => {

  return (
    <Card titlePage='Home Page'>
      <h1>Welcome to Crypto Explained!</h1>
      <p>Here you can find a lot of information about crypto and how it works!</p>
    </Card>
  )
}

export default HomePage
