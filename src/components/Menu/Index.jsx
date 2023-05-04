import React from "react"
import Logo from "../logo/Logo.jsx"
import "./style.css" 

function Menu () {
    return (
        <nav className="menu">
            <Logo />
            <div className="options"> 
                <ul>
                    <li>
                        <a href="#">
                            Página Inicial
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            Quem somos
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">
                            Serviços
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu 
