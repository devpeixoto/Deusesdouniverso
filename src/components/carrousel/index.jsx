import React, {useState, useEffect, useRef} from "react";
import "./style.css"

import { motion } from "framer-motion";


import imge1 from '../../../public/img/tininha.jpeg'
// import imge2 from '../../../public/img/logo.jpg'
// import imge3 from '../../../public/img/1682461705027.jpg'
import imge4 from '../../../public/img/babaAlexandre.jpeg'


const images = [imge1, imge4]
const history = [
    '"E não se trata de religião, se trata de como viver a vida, porque cada religião tem sua bússola que não deixa de ser um oráculo onde todos nós devemos seguir. Assim como o as cartas, os Búzios, as runas, o Opele ifá, a bola de cristal, a leitura de mãos... são oráculos ancestrais. Aqui no DEUSES DO UNIVERSO nós temos a diversidade de oráculos para atender a sua necessidade" .. Tininha Santtos',
    'A IYALORISA NILZA ATI OYA (Tininha), tem a personalidade do candomblé do Rio de Janeiro, trazendo em seu websit conteúdos relevantes sobre religiões de matrizes africanas, além de pautas didáticas e culturais. Inteligente, irreverente e exagerada(a vezes), sentimental, empoderada, militante, humana..., mulher! ÌYÁ Tininha é um show a parte! entre logo e seja atendido(a) pela melhor equipe de oraculistas selecionados por eval.',
    'BÀBÁ ALEXANDRE COIMBRA - BÀBÁLAWO IFÁṢADÉ'
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

