import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getDataFromServer, putDataToServer } from "./api/fetchData";

function UpdateUser(){

    const [userId, setUserId] = useState(0)
    const [user, setUser] = useState({username:'', email:''})
    const { id } = useParams()
    const { register, handleSubmit , formState : {errors}, setValue } = useForm()
    const navigate = useNavigate()

    
    const getUser = () => {
        //console.log(id)
        getDataFromServer("http://localhost:8080/api/usuario/"+id)
            .then(res=> {
                setUser({
                    username: res.username,
                    email: res.email
                });
                // Actualizar los valores de los campos del formulario con los datos obtenidos
                setValue('username', res.username);
                setValue('email', res.email);
            })
    }

    useEffect(() => {
        getUser()
    }, [])

    const updateUser = (data) => {
        putDataToServer("http://localhost:8080/api/usuario/"+id, data)
        .then(res => {
            console.log(res)
            navigate("/user-list")
        })
        .catch(error => console.log(error))
    }

    const onSubmit = (data) => {
        updateUser(data)
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

            <button type="submit" >Editar usuario</button>
        </form>
    )
}

export default UpdateUser