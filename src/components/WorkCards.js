import React from "react"
import "../css/index.css"


function WorkCards(props) {
    return(
        
        <div className="md:flex bg-white rounded-lg p-6 shadow-2xl m-8 lg:inline-flex  " >
            <img className="h-16 w-16 md:h-20 md:w-20 rounded-full mx-auto md:mx-6 " 
                src={props.img} alt=""></img>
            <div className="text-center md:text-left">
                <h2 className="text-lg">{props.title}</h2>
                <div className="text-purple-700">{props.desp}</div>
            </div>
      </div>
    )
}

export default WorkCards