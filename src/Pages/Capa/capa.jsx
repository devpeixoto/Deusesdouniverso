import React from "react";
import './style.css'
import capa from '../../../public/img/capa1.jpg'

const Capa = () => {
    return(
        <div className="container">
            <img className="backgroundMajor" src={capa} />
        </div>
    )       
}

export default Capa