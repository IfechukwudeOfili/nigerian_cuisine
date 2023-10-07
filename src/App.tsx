import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Story from './components/Story'
import Specials from './components/Specials'
import PrintMenu from './components/PrintMenu'
import Footer from './components/Footer'
import NavLinks from './components/NavLinks'

function App() {

  return (
    <>
      <Header/>
      <div className='mobileNav'>
        <NavLinks/>
      </div>
       <Banner/>
    <Stats/>
      <Story />
      <Specials/>
      <PrintMenu/>
       <Footer/>
    </>
  )
}

export default App
