import { useState } from "react"

export function Lista(){

    const nombres = ['María', 'Ana']

    const [names, setNames] = useState(nombres)

    const handleClickDelete = () => {
        // while(nombres.length > 0){
        //     nombres.pop()
        //     console.log(nombres.length)
        // }
        // 
        setNames([])
    }

    
    const handleClickAdd= () => {
        setNames(nombres)
    }

    return(
        <>
        <button onClick={handleClickAdd}>Llenar  nombres !</button>
        <button onClick={handleClickDelete}>Vaciar  nombres !</button>
            {/* {nombres.map( (nombre, i) => (<p key={i}>{nombre}</p>))} */}
            {names.length >0 ? (
                <>
                    {
                        nombres.map( (nombre, i) => (
                            <p key={i}>{nombre}</p>
                        ))
                    }
                </>
                ):(
                    <p>No hay nombres que mostrar !</p>
                )
            }
        </>
    )
}
export default Lista