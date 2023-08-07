import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import estebanImg from './img/estebanImg.png'
function App() {
  return (
      <main className="bg-white px-10">
        <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-xl">developed</h1>
                <ul className="flex items-center">
                    <li>
                        <BsFillMoonStarsFill />
                    </li>
                    <li>

                        <a className="bg-gradient-to-r bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/#">Resume</a>
                    </li>
                </ul>
            </nav>
                <div className="text-center p-10">
                    <h2 className="text-5xl p-10 text-teal-600 font-medium">Esteban guerra</h2>
                    <h3 className="text-2xl py-2">Desarrollador de aplicaciones y web</h3>
                    <p className="text-md leading-8 text-gray-800">
                        Soy un desarrollador de aplicaciones con experiencia en, desarrollo e implementación de soluciones para diversas plataformas.
                    </p>
                </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                <AiFillGithub />
                <AiFillGithub />
                <AiFillGithub />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
                <img className="mx-auto w-60 " src={estebanImg} alt="stiven" />
            </div>
        </section>
          <section>
              <div>
                  <h3 className="text-3xl py-1">
                      Mi Experiencia
                  </h3>
                  <p className="text-md py-2 leading-8 text-gray-800">
                      Desarrollador frontEnd y BackEnd con mas de 3 años de experiencia y crecimiento constante
                      en el desarrollo de aplicaciones web para dispositivos android e ios mediante <span className="text-teal-500">Apache cordova ,Html , Css, Javascript</span> ,
                      adaptando sus funcionalidades hacia los clientes.
                      Ademas poseo conocimiento en Frameworks como <span className="text-teal-500"> Angular,Ionic, Spring Boot </span > librerias como <span className="text-teal-500">Jquery, React </span>  y BackEnd como <span className="text-teal-500"> NodeJS , Java</span>.

                  </p>
              </div>

          </section>
      </main>

  );
}

export default App;
