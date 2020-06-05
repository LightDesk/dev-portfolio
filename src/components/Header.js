import React from "react"
import {Link} from "gatsby"
import profile from "../img/Profile/profile.jpeg"

function Header() {
    return(
         <div >
             <div>
             <header className=" bg-white shadow-lg fixed w-full flex  lg:mx-4 rounded text-2xl justify-between px-3 items-center">
                 <h1 className=" px-4 py-2 font-extrabold text-purple-700" >&lt;Piyush /&gt;</h1>
                 <div className=" pr-4  text-purple-700">
                    <Link className="mx-3 rounded-lg border-2 p-2 border-radius border-purple-700 text-lg" to="/project" >Projects</Link>
                    <Link className="mx-3 rounded-lg border-2 p-2 border-radius border-purple-700 text-lg" to="/contact" >Hackathons</Link>
                 </div>
             </header>
             </div>
            <div className=" text-center lg:text-left  lg:grid lg:grid-cols-4  lg:bg-white py-12" >
                <div className=" lg:h-screen lg:bg-purple-700 ml-8 rounded display-none" >

                </div>
                <div className="lg:bg-purple-700 rounded lg:mr-32 ">
                <img className="max-w-xs rounded-full inline z-10 lg:mt-16 lg:ml-12 shadow-2xl m-16" src={profile} alt="profile"></img>
                </div>
                <div className="col-span-2 lg:mt-24 text-black lg:ml-32 mb-8">
                    <h2 className="lg:text-5xl text-4xl font-thin" >Hi, I am  <br/> <strong className="font-bold">Piyush Sakhare</strong></h2>
                        <h3 className="lg:text-4xl text-3xl font-mono">&lt;Web-Devloper / Designer&gt;</h3>
                 </div> 
                
             </div>
             
         </div>
    )
}

export default Header