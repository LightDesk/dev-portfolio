import React from "react";
import git from "../img/Social/github.svg"
import gmail from "../img/Social/gmail.svg"
import insta from "../img/Social/insta.svg"
import link from "../img/Social/linkedin.svg"


function Footer() {
    return(
        <footer className=" h-64 bg-white shadow-lg mb-8 mt-8 text-center mx-2">
            <h1 className="text-xl my-2 mb-16 px-3 py-2" >Hit me Up !<a className=" text-purple-700" href="mailto:piyushsakhare713@gmail.com" > piyushsakhare713@gmail.com</a></h1>
            <ul className="justify-around flex lg:px-64 " >
                <li><a href="https://github.com/LightDesk" target="_blank"><img className=" w-12" src={git} ></img></a></li>
                <li><a href="mailto:piyushsakhare713@gmail.com" target="_blank"><img className=" w-12" src={gmail} ></img></a></li>
                <li><a href="https://www.instagram.com/picturesofpiyush/" target="_blank"><img className=" w-12" src={insta} ></img></a></li>
                <li><a href="https://www.linkedin.com/in/piyush-sakhare-4a8035129/" target="_blank"><img className=" w-12" src={link} ></img></a></li>
            </ul>
            <p className="pt-10" >Made with Gatsby and some coffee ;)</p>
        </footer>
    )
}

export default Footer