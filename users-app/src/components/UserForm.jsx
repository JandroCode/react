import { useForm } from "react-hook-form"
import { postDataToServer } from "./api/fetchData"
import { useNavigate } from "react-router-dom"



function UserForm(){

    const { register, handleSubmit , formState : {errors} } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)

        postDataToServer("http://localhost:8080/api/usuario", data)
            .then(res => {
                console.log(res)
                navigate('/user-list')

            })
            .catch(error => console.log(error))
    }


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" 
                placeholder="Username" 
                autoComplete="off" 
                {...register('username')}
            />

            <input type="text" 
                placeholder="Email" 
                autoComplete="off" 
                {...register('email')}
            />

            <button type="submit">Guardar usuario</button>
        </form>
    )
}

export default UserForm