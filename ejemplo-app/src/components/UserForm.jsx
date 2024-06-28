import { useForm } from "react-hook-form"
import { saveUsers } from "../services/users.js"
import { API_URL } from "../consts.js"

export function UserForm() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        //console.log(data)

        saveUsers(API_URL, data)
            .then( res => {
                console.log('Usuario registrado !', res)
            })
            .catch(error =>{
                console.log('Error en la petición : ' , error)
            })
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card p-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group row">
                                    <div className="offset-md-3">
                                        {errors.nombre?.type === 'required' && <small className="text-danger">El campo nombre es requerido</small>}
                                        {errors.nombre?.type === 'maxLength' && <small>El nombre  no puede tener más de 10 caracteres</small>}
                                    </div>
                                    <label htmlFor="nombre" className="col-md-3 col-form-label">Nombre</label>
                                    <div className="col-md-8">
                                        <input type="text" id="nombre" className="form-control mb-2" autoComplete="off" 
                                            {...register('nombre', {
                                                required: true,
                                                maxLength: 10
                                            })} /> 
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="offset-md-3">
                                        {errors.apellidos?.type === 'required' && <small className="text-danger">El campo apellidos es requerido</small>}
                                    </div>
                                    <label htmlFor="apellidos" className="col-md-3 col-form-label">Apellidos</label>
                                    <div className="col-md-8">
                                        <input type="text"  id="apellidos" className="form-control mb-2" 
                                        {...register('apellidos', {
                                            required: true
                                        })} /> 
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="offset-md-3">
                                        {errors.email?.type === 'pattern' && <small>El formato de email  es incorrecto</small>}
                                    </div>
                                    <label  htmlFor="email" className="col-md-3 form-col-label">Email</label>
                                    <div className="col-md-8">
                                            <input type="text" id="email" className="form-control mb-2"  autoComplete="off"
                                            {...register('email', {
                                                required: true,
                                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i

                                            })} /> 
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-3 form-col-label"></label>
                                    <div className="col-md-8">
                                        <button type="submit" className="form-control btn btn-outline-primary">Registrar usuario</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}