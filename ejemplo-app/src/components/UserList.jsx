
import { useState, useEffect } from "react"
import { getUsers } from "../services/users.js"
import { API_URL } from "../consts.js";


export function UserList(){

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const handleClick = (id) => {
        console.log(id)
    }


    useEffect(() => {
        getUsers(API_URL)
            .then(result => {
                setUsers(result);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);


    if (loading)  return <div>Loading...</div>;
    if (error)  return <div>Error: {error.message}</div>;
        
    return(
        <>

            <div className="container mt-5">

                <div className="row">

                    <div className="col-md-8">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th>Nombre</th>
                                        <th>Apellidos</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {users.map(i => (
                                    <tr key={i.id}>
                                        <td>{i.id}</td>
                                        <td>{i.nombre}</td>
                                        <td>{i.apellidos}</td>
                                        <td>{i.email}</td>
                                        <td>
                                            <button onClick={ () => handleClick(i.id) } className="btn btn-outline-danger">
                                                <i className='bx bxs-trash-alt'></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </>
    )
}