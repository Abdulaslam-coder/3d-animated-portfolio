import Hero from "./components/hero/hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
//import Test from "./components/Test";
//import Test3d from "./components/Test3d";
const App = () => {
  return (
    <div className='container'>
      <section id="#home">
         <Hero/>
      </section>
      <section id="#services">
          <Services/>
      </section>
     {/* <section id="#portfolio"> */}
           <Portfolio/>
     {/* </section> */}
     <section id="#contact">
         <Contact/>
     </section>  
    </div>
  )
}

export default App