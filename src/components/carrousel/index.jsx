import React, {useState, useEffect, useRef} from "react";
import "./style.css"

import { motion } from "framer-motion";


import imge1 from '../../../public/img/tininha.jpeg'
import imge2 from '../../../public/img/logo.jpg'
import imge3 from '../../../public/img/1682461705027.jpg'


const images = [imge1, imge2, imge3]
const history = [
    'Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido.',
    'Texto 2 não sei o que vai ser desse texto mas irei colocar da melhor forma possível pois isso tudo só depende de mim para dar certo',
    'texto 3 vamos la, vou mostrar que sou capaz de tudo nessa vida, já sou um vencedor por lutar por tudo aquilo que eu quiz! e não preciso mostrar pra ninguém.'
]

function CarSlid( ) {
    const carousel = useRef()
    const [width, setWidth] = useState(0)
    const [comment, setComment] = useState(0)
    
    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    useEffect(() => {
        setComment(carousel.current?.scrollWidth - carousel.current?.offsetComment)
    },[])

    return (
        <div className="imgcarousel" >
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div 
                className="inner"
                drag="x"
                dragConstraints={{right:0, left: -width}}
                initial={{x:100}}
                animate={{x:0}}
                transition={{duration: 0.8}}
                >
                    {images.map(image => (
                        <motion.div className="item" key={image}>
                            <img src={image} alt="Texto" />
                        </motion.div>
                    ))}
            

                </motion.div>
                <motion.div
                 className="inner"
                 drag="x"
                 dragConstraints={{right:0, left: -width}}
                 initial={{x:100}}
                 animate={{x:0}}
                 transition={{duration: 0.8}}
                >
                    {history.map(comments => (
                        <motion.div className="item" key={comments}>
                            <div children={comments} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CarSlid

// import  ReactDOM  from "react-dom";
// import "./style.css"

// import { Carousel  } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import capa1 from '../../../public/img/capa1.jpg'


// function CarSlid() {
//     return(
//         <Carousel>
//             <div className="imgcarousel">
//                 <img src={capa1} />
//                 <p className="legend" ></p>
//             </div>
//             <div>
//                 <img src={capa1} />
//                 <p className="legend2"></p>
//             </div>
//         </Carousel>
//     )
// }

