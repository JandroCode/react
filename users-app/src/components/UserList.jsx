import { useEffect } from "react"
import { useState } from "react"
import { deleteDataFromServer, getDataFromServer } from "./api/fetchData"
import ClipLoader from 'react-spinners/ClipLoader';
import UpdateUser from "./UpdateUser";
import { useNavigate } from "react-router-dom";


function UserList(){
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const [errors,setErrors] = useState(null)
    const [updateForm, setUpdateForm]  = useState(false)

    const navigate = useNavigate()

    const getUsers = () => {
        getDataFromServer("http://localhost:8080/api/usuario")
            .then(res => {
                setUsers(res)
                setLoading(false)
            }).
            catch(error=>{
                setErrors(error)
                setLoading(false)
            })
    }

    const deleteUser = (id) => {
        console.log(id);
        deleteDataFromServer('http://localhost:8080/api/usuario/'+id)
          .then(() => {
            getUsers(); 
          })
          .catch(error => console.log(error));
      };


    const handleUpdateForm = () =>{
        setUpdateForm(prevValue => !prevValue)
    }
    
    useEffect(() => {
        getUsers()
    }, [])

    if(loading){
        return <ClipLoader size={50} color={"#123abc"} loading={loading} />;
    }

    const handleNavigate = (id) => {
        navigate(`/update-user/${id}`)
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {users.map( user => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={ () => deleteUser(user.id)}>Eliminar</button>
                        </td>
                        <td>
                            <button onClick={ () =>handleNavigate(user.id)}>Modificar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserList