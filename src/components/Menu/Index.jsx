import React, { useRef } from "react"
// import Logo from "../logo/Logo.jsx"
import "./style.css"
import App from '../../App'

function Menu () {

    const ref = useRef(null)

    const handleClick = ( ) => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <nav className="menu">
            {/* <Logo /> */}
            <div className="options"> 
                <ul>
                    <li>
                        <a href="#" >
                            Página Inicial
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#" ref={ref} onClick={handleClick}>
                            Serviços
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#" >
                            Quem somos
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu 
