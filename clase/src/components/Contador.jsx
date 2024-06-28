import { useState } from "react"


function Contador(){


    const [numero,setNumero] = useState(0)

    const handleIncrement = () => {
        setNumero(numero+1)
    }

    const handleDecrement = () => {
        setNumero(numero-1)
    }

    return(
        <>
            <h2>Contador</h2>
            <h3>Valor del numero {numero}</h3>
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decrementar</button>
        </>
    )
}


export default Contador