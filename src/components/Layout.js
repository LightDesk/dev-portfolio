import React from "react"
import WorkCards from "./WorkCards"
import Header from "./Header"
import "../css/index.css"
import data from "./assets"
import Misc from "./misc"
import Footer from "./Footer"


function Layout() {
    const card = data.map(info => <WorkCards img={info.img} key={info.id} title={info.title} desp={info.desp} />)
    return(
        <div>
            <Header />
            <div className="bg-purple-700 md:m-6 rounded ">
                <h1 className="text-white p-6 text-center text-3xl text-center" >Here are some Skills i know</h1>
                <div className="lg:grid lg:grid-cols-3" >
                    {card}
                </div>
            </div>    
            <Misc />
            <Footer />
        </div>
        
    )
}

export default Layout


 