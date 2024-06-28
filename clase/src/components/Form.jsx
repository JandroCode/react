import { useState } from "react"

function Form(){


    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')

    // const handleNombre = (e) => {
    //     //console.log(e)
    //     //console.log(e.target)
    //     //console.log(e.target.value)
    //     setNombre(e.target.value)
    // }

    // const handleEmail =  (e) => {
    //     //console.log(e.target.value)
    //     setEmail(e.target.value)
    // }

    const [formValues, setFormValues] = useState({
        nombre : '',
        email : ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target 

        setFormValues( data => ({
            ...data,
            [name] : value
        }))

       
    }


    const handleSubmit =  (e) => {
        e.preventDefault()
        // console.log('Nombre ' , nombre)
        // console.log('Email ' , email)

        console.log(formValues)
    }

    return(
        // <form onSubmit={handleSubmit}>
        //     <input type="text" placeholder="Nombre" autoComplete="off" onChange={handleNombre} /><br />
        //     <input type="text" placeholder="Email" autoComplete="off" onChange={handleEmail} /><br />

        //     <button type="submit">Enviar</button>
        // </form>


        <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="Nombre" 
                autoComplete="off" 
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange} 
                
                /><br />


            <input type="text" 
                placeholder="Email" 
                autoComplete="off" 
                name="email"
                value={formValues.email}
                onChange={handleChange} 
            /><br />

            <button type="submit">Enviar</button>
        </form>
    )


}

export default Form