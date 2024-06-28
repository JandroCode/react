import { useEffect } from "react"
import { useState } from "react"
import { getDataFromServer } from "../api/fetchData"


function Users(){

    const [users, setUsers] = useState([])

    const getUsers = () => {
        getDataFromServer('https://jsonplaceholder.typicode.com/users')
            .then( res => {
                console.log(res)
                setUsers(res)
            })
    }

    useEffect(() => {
        getUsers()
    }, [])
    

    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {users.map(user =>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Users