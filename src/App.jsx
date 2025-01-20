
import './App.css'
import Header from './Components/Header/Header.jsx'
import Information from './Components/Body/Information/Information.jsx'
import Skills from './Components/Body/Skills/Skills.jsx'
import Experience from './Components/Body/Experience/Experience.jsx'
import ForMe from './Components/ForMe/ForMe.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {
  

    return (
        <div className= "mainscreen">
            <div><Header></Header></div>

            <div id="Info"><Information></Information></div>
            <div id="Experience"><Experience></Experience></div>
            <div id="Skills"><Skills></Skills></div>
            <div id="ForMe"><ForMe></ForMe></div>
            <div id="Footer"><Footer></Footer></div>
        </div>
   
  )
}

export default App
