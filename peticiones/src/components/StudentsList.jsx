import React, { useEffect, useState } from 'react'
import { deleteData, getData } from '../api/apiService'
import { useNavigate } from 'react-router-dom'

function StudentsList() {

  const [students, setStudents] = useState([])
  const [error, setError] = useState({}) 
  const navigate =useNavigate()

  const url = 'http://localhost:8080/api/student'


  const fetchStudents = () => {
    getData(url)
        .then(res => setStudents(res))
        .catch(error => setError(error))
  }

  const handleUpdateClick = (id) => {
    console.log(id)
    navigate(`/update/${id}`)
  }

  const handleDeleteClick = (id) => {
    deleteData(url+'/'+ id)
        .then(() => fetchStudents())
        .catch(error =>{
            console.log(error)
            setError(error)
        })
  }

  useEffect(() => {
    fetchStudents()
  },[])

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-8">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                            {
                                students.map( student => (
                                    <tr key={student.id}>
                                        <td>{ student.id }</td>
                                        <td>{ student.name }</td>
                                        <td>{ student.surname }</td>
                                        <td>{ student.phone }</td>
                                        <td>
                                            <button onClick={ () => handleUpdateClick(student.id) } className='btn btn-outline-primary me-2'>
                                                <i className='bx bxs-pencil'></i>
                                            </button>

                                              <button onClick={ () => handleDeleteClick(student.id) } className='btn btn-outline-danger'>
                                                <i className='bx bxs-trash-alt' ></i>
                                            </button>
                                            
                                        </td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default StudentsList