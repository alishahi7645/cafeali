import Footer from './src/components/Footer/Footer'
import Hero from './src/components/Hero/Hero'
import Services from './src/components/Services/Services'
import WhereToBuy from './src/components/WhereToBuy/WhereToBuy'


function App() {
  

  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Services/>
      <WhereToBuy/>
      <Footer/>
    </div>
  )
}

export default App
