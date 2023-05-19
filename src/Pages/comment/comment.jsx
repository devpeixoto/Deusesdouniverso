import React from "react";
import './style.css'

import img001 from '../../../public/img/babaAlexandre.jpeg'
import img002 from '../../../public/img/tininha03.jpeg'
import img003 from '../../../public/img/Thiago.jpeg'


const Comment = () => {
    return (
        <div className="first">
            <div className="second">
                <img src={img001} />
                <h4>BÀBÁ ALEXANDRE COIMBRA BÀBÁLAWO IFÁṢADÉ</h4>
                <br/>
                <span className="textComent">
                    A Iyalorisa Nilza Ati Oya (Tininha), é a personalidade do candomblé do Rio de Janeiro, trazendo em seu WebSite
                    conteúdos relevantes sobre religiões de matriz africana, além de pautas didáticas e culturais. Inteligente, 
                    irreverente e exagerada (as vezes), sentimental, empoderada, militante, humana..., Mulher Ìyá Tininha é um 
                    show a parte! Entre e logo seja atendido(a) pela melhor equipe de oraculistas selecionados por ela.
                </span>
            </div>

            <div className="second">
                <img src={img002} />
                <br />
                <h4>Iyalorisa Tininha Ati Oya</h4>
            </div>

            <div className="second" >
                <img src={img003} />
                <h4>Babaloorisa Thiago Scoffano de Osossi</h4>
                <br />
                <span className="textComent">
                    Iyalorisa Tininha de Oya, filha e descendente direta do Asé Olòófa, é uma pessoa de uma personalidade
                    forte e de uma doutrina espiritual magnífica. Um ser humano de um coração dócil e puro. 
                    Hj criando seu Website vcs poderão ver e acompanhar toda sua trajetória e história dentro e fora do 
                    candomblé. Boa Sorte minha filha e voe bem alto, faça o seu melhor pois eu sei da sua grande capacidade
                </span>
            </div>
        </div>
    )
} 

export default Comment