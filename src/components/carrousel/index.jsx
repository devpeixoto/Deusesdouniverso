import React, {useState, useEffect, useRef} from "react";
import "./style.css"

import { motion } from "framer-motion";

import imge1 from '../../../public/gif/1.gif'
import imge2 from '../../../public/gif/2.gif'
import imge3 from '../../../public/gif/3.gif'
import imge4 from '../../../public/gif/4.gif'
import imge5 from '../../../public/gif/5.gif'
import imge6 from '../../../public/gif/6.gif'
import imge7 from '../../../public/gif/7.gif'
import imge8 from '../../../public/gif/8.gif'


const images = [imge1, imge2, imge3, imge4, imge5, imge6, imge7, imge8]

    
function CarSlid( ) {
    const carousel = useRef()
    const [width, setWidth] = useState(0)
    // const [comment, setComment] = useState(0)
    
    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    // useEffect(() => {
    //     setComment(carousel.current?.scrollWidth - carousel.current?.offsetComment)
    // },[])

    return (
        <div className="bg">
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

                {/* <motion.div
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
                </motion.div> */}
            </motion.div>
        </div>
        </div>
    )
}

export default CarSlid