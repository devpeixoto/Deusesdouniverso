import React from "react";
import './style.css'

import imge1 from '../../../public/img/tininha.jpeg'

const Description = () => {
    return (
        <div className="desc">
            <div className="desc2">
                <img src={imge1} />
            </div>
            <div className="text">
                <h4>"E não se trata de religião, se trata de como viver a vida, porque cada religião tem sua bússola que 
                não deixa de ser um oráculo onde todos nós devemos seguir. Assim como o as cartas, os Búzios, as runas,
                o Opele ifá, a bola de cristal, a leitura de mãos... são oráculos ancestrais. 
                Aqui no DEUSES DO UNIVERSO nós temos a diversidade de oráculos para atender a sua necessidade" .. Tininha Santtos
                </h4>
            </div>
            <div className="ceo" >
                <h3>"Tininha Santtos - Ceo da DDU"</h3>
            </div>
        </div>
    )
}

export default Description