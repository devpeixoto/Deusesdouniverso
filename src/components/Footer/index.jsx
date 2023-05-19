import React from "react"
import "./style.css"
import { FaInstagram, FaFacebook } from 'react-icons/fa'

function Footer () {
    return (
        <footer>
            <div className="containerFooter">
                <span className="gridone">
                    <a href="https://www.facebook.com/deusesdouniverso/" target="_blank">Facebook 
                    <FaFacebook size={35} />
                    </a>
                </span>
                <span className="gridtwo">
                    <a href="https://instagram.com/deusesdouniversonr?igshid=MzNlNGNkZWQ4Mg==" target="_blank">Instagram 
                    <FaInstagram size={35}/>
                    </a>
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