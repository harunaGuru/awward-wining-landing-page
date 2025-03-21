import Hero from "./Components/Hero.jsx";
import FloatingImage from "./Components/FloatingImage.jsx";
import Navbar from "./Components/Navbar.jsx";
import Feature from "./Components/Feature.jsx";
import Story from "./Components/Story.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
      <main className="w-full overflow-x-hidden">
          <Navbar />
            <Hero />
          <FloatingImage />
          <Feature />
          <Story />
          <Contact />
          <Footer />
          {/*<section className="min-h-screen w-screen bg-black"></section>*/}
      </main>
  )
}

export default App
