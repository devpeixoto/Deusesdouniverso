import React from "react";
import './style.css'
import capa from '../../../public/img/capa02.gif'

const Capa = () => {
    return(
        <div className="container">
            <img className="backgroundMajor" src={capa} alt="DeusesDoUniverso"/>
        </div>
    )       
}

export default Capa