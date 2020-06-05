import React from "react"

function Misc() {
    return(
        <div className="lg:m-4 grid grid-cols-2  rounded text-center text-white bg-purple-700 lg:bg-white" >
            <div className="bg-purple-700 rounded-lg lg:m-6 p-4 shadow-2xl lg:h-56 "  >
                <h1 className="mb-3 text-2xl">Some more Skills</h1>
                <ul className=" lg:grid lg:grid-cols-2 text-left ml-4 list-disc" >
                    <li> jQuery</li>
                    <li> GatsbyJS</li>
                    <li> Sass</li>
                    <li> Bootstrap</li>
                    <li> Tailwind</li>
                    <li> MySQL</li>
                    <li> Firebase</li>
                    <li> Netlify</li>
                    <li> NextJS</li>
                    <li> npm</li>
                    <li> Django</li>
                    <li> ExpressJS</li>
                </ul>
            </div>
            <div className="bg-purple-700 rounded-lg lg:m-6 p-4 shadow-2xl  lg:h-56 " >
                <h1 className="mb-3 text-2xl">Android Devlopment</h1>
                <ul className=" lg:grid lg:grid-cols-2 text-left ml-4 list-disc" >
                    <li> Android Studio</li>
                    <li> Java</li>
                    <li> Kotlin</li>
                    <li> Flutter</li>
                    <li> REST</li>
                    <li> Python</li>
                    <li> Dart</li>
                    <li> OOP</li>
                    <li> Data Structures</li>
                    <li> C/C++</li>
                </ul>
            </div>
        </div>
    )
}

export default Misc