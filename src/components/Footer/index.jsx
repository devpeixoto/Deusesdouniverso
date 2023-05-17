import React from "react"
import "./style.css"
// import { FallInstagram, FaFacebook } from 'react-icons/fa'

function Footer () {
    return (
        <footer>
            <div className="containerFooter">
                <span className="gridone">
                    <a href="https://www.facebook.com/deusesdouniverso/" target="_blank">Facebook</a>
                </span>
                <span className="gridtwo">
                    <a href="https://instagram.com/deusesdouniversonr?igshid=MzNlNGNkZWQ4Mg==" target="_blank">Instagram</a>
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