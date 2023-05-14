import React from "react"
import "./style.css"
// import { FallInstagram, FaFacebook } from 'react-icons/fa'

function Footer () {
    return (
        <footer>
            <div className="containerFooter">
                <span className="gridone">
                Redes sociais
                </span>
            </div>
            <div>
                <span className="introduce">
                    © Copyright
                    Develop by Gabriel Peixoto 
                    GitHub: <a href="https://github.com/devpeixoto" target="_blank">DevPeixoto</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer 