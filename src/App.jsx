import Differencies from "./components/Differencies"
import Discover from "./components/Discover"
import Feedback from "./components/Feedback"
import GetChance from "./components/GetChance"
import Header from "./components/Header"
import Menu from "./components/Menu"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Suscribe from "./components/Suscribe"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <Header />
      <Discover />
      <Menu />
      <Differencies />
      <GetChance />
      <Feedback />
      <Suscribe />
      <Footer />
    </>
  )
}

export default App
