import About from "./Components/About"
import Contact from "./Components/Contact"
import Courses from "./Components/Courses"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Review from "./Components/Review"


function App() {

  return (
    <div>
     <Navbar />
  <main>
    <div id="home">
    <Hero />
    </div>
    <div id="about">
      <About /> 
    </div>
    <div id="courses">
      <Courses />
    </div>
    <div id="reviews">
      <Review  />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <div>
      <Footer />
    </div>
  </main>
    </div>
  )
}

export default App
