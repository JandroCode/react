
import { useForm } from "react-hook-form"

function SecondForm(){

    const { register, handleSubmit , formState :  {errors }}  = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {errors.nombre?.type === 'required' && <small>El campo nombre es obligatorio !</small>}
                {errors.nombre?.type === 'maxLength' && <small>El campo nombre no puede exceder los 10 caracteres !</small>}
            </div>
            <input type="text" 
                placeholder="nombre" 
                autoComplete="off" 
                {...register('nombre', {
                    required: true,
                    maxLength: 10
                })}
            />

            <button type="submit">Enviar</button>
        </form>
    )
}

export default SecondForm