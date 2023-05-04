import React from "react"
// import { createBrowserRouter } from "react-router-dom"
import "./App.css"
import Capa from "../public/img/capa1.jpg"

function App () {
    return (
        <div>
            <div className="container">
                <img className="backgroundMajor" src={Capa} />
            </div>
            <div className="anything" >
                <h1>
                    Telefone Para Contato (21) 97694-2295
                </h1>
            </div>
            <div className="dualwindow">
                <span>
                    <h3>Serviços</h3>
                    <br/>
                    JOGO DE BÚZIOS<br/>
                    OPELE IFÁ<br/>
                    BOLA DE CRISTAL<br/>
                    TARÔ CIGANO<br/>
                    JOGO DE OSSOS<br/>
                    BARALHO DE MARIA PADILHA<br/>
                    CAIXA DE PANDORA<br/>
                    ENTRE OUTROS...
                </span>
                <span>
                    <h3>Nosso Queridinho</h3>
                    <br/>
                    3 PERGUNTAS OBJETIVAS NO BARALHO POR
                    <br/>
                    R$9,99.
                </span>

            </div>
        </div>

        )
}

export default App 

