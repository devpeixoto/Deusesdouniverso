import React from "react"
import "./App.css"

import Sale from "./Pages/sale/sale"
import Capa from "./Pages/Capa/capa"
import Phone from "./Pages/Phone/phone"
import CarSlid from "./components/carrousel"

function App () {
    return (
        <div>
            <Capa />
            <Phone />
            <Sale />
            <CarSlid />
        </div>

        )
}

export default App 

