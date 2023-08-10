import {SiAngular,SiIonic,SiJquery,SiJavascript,SiHtml5,SiCss3} from 'react-icons/si'
const Icon = [SiAngular,SiIonic,SiJquery,SiJavascript,SiHtml5,SiCss3];
const names  = ['Angular Framework','Ionic Framework','Jquery','Javascript','Html','Css']

function Conocimientos(){

    return (
        <div className=" flex justify-center flex-wrap mt-20">
            {Icon.map((Icon,index) => {
                return (
                    <div key={index} className="flex flex-col items-center text-center  text-xl w-60 m-5 shadow-lg rounded-lg p-5 dark:bg-gray-500">
                        <Icon className="w-20 h-20  text-blue-500" />
                        <h3 className="dark:text-white font-medium">{names[index]}</h3>

                    </div>
                )

            })}
        </div>
    )
}
export default Conocimientos;
