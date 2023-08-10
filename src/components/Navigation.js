import {BsFillMoonStarsFill} from "react-icons/bs";

function Navigation(args){

    return(
        <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">React Wep App & TailwindCss</h1>
            <ul className="flex items-center">
                <li>
                    <BsFillMoonStarsFill className="cursor-pointer gra text-2xlext dark:text-white" onClick={()=> {
                        args.setDarkMode(!args.darkMode);
                        localStorage.setItem('dark',!args.darkMode)
                    }} />
                </li>
                <li>
                    <a className="bg-gradient-to-r bg-blue-500  text-white px-4 py-2 rounded-md ml-8"  href="/#">Resume</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;
