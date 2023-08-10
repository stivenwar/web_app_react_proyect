import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {useState} from "react";
import estebanImg from './img/estebanImg.png'
import Conocimientos from "./components/Conocimientos";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

function App() {
    const drk = localStorage.getItem('dark') === 'true';
    const [darkMode, setDarkMode] = useState(drk)

  return (
      <div className={darkMode? 'dark': ''}>
          <main className="bg-white px-10 md:px20 lg:px-40 dark:bg-gray-800">
              <section className="min-h-screen">
                    <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
                    <AboutMe/>
                  <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
                      <AiFillGithub />
                      <BsLinkedin />
                  </div>
                  <div className="relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 md:w-128 md:h-128">
                      <img className="mx-auto w-60 h-60 md:w-80 md:h-80" src={estebanImg} alt="stiven" />
                  </div>
              </section>
              <section>
                  <Experience/>
                  <Conocimientos/>
              </section>
          </main>
      </div>
  );
}

export default App;
