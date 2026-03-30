import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import PlaneCards from './Components/PlaneCards'
import Price from './Components/Price'
import ProductCardSection from './Components/ProductCardSection'
import StaticCardSection from './Components/StaticCardSection'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Price/>
      <ProductCardSection/>
      <StaticCardSection/>
      <PlaneCards/>
    </>
  )
}

export default App