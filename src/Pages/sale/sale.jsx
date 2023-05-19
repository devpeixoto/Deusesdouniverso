import React from "react";
import "./style.css"


const Sale = () => {
    return(
        <div className="dualwindow">
            <span className="minlayout">
                <h3>Serviços</h3>
                <br/>
                <div>
                    <span>
                        JOGO DE BÚZIOS<br/>
                        OPELE IFÁ<br/>
                        BOLA DE CRISTAL<br/>
                    </span>
                    <span>
                        TARÔ CIGANO<br/>
                        JOGO DE OSSOS<br/>
                        BARALHO DE MARIA PADILHA<br/>
                    </span>
                    <span>
                        ENTRE OUTROS...
                    </span>
                </div>
            </span>
            <span className="space">
                <h3>Nosso Queridinho</h3>
                <br/>
                <div>
                    3 PERGUNTAS OBJETIVAS NO BARALHO POR
                    <h2>R$9,99</h2>
                </div>
            </span>
        </div>
    )
}

export default Sale