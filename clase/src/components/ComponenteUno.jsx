import ComponenteDos from "./ComponenteDos"


function ComponenteUno({numero, message}){
    return(
        <>
            <h2>Componente uno</h2>
            <ComponenteDos texto={'Enviando información desde el componente uno !'} />
            <p>Número que viene desdel componente principal <span>{numero}</span></p>
            <p>Mensaje que viene desdel componente principal <span>{message}</span></p>
        </>
    )
}

export default ComponenteUno