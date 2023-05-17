import React from "react"
import "./App.css"

import Sale from "./Pages/sale/sale"
import Capa from "./Pages/Capa/capa"
import Phone from "./Pages/Phone/phone"
import CarSlid from "./components/carrousel"
import Description from "./Pages/description/description"
import Comment from "./Pages/comment/comment"

function App () {
    return (
        <div>
            <Capa />
            <Phone />
            <Sale />
            <Description />
            <CarSlid />
            <Comment />
        </div>

        )
}

export default App 

