import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import PlaneCards from './Components/PlaneCards'
import Price from './Components/Price'
import ProductCardSection from './Components/ProductCardSection'
import StaticCardSection from './Components/StaticCardSection'
import Transform from './Components/Transform'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Price/>
      <ProductCardSection/>
      <StaticCardSection/>
      <PlaneCards/>
      <Transform/>
    </>
  )
}

export default App