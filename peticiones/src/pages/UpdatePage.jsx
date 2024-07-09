import React, { useEffect, useState } from 'react'
import FormComponent from '../components/FormComponent'
import { useNavigate, useParams } from 'react-router-dom'
import { getData, putData } from '../api/apiService'


function UpdatePage() {

  const [student, setStudent] = useState({name:'' , surname:'' , phone:''})
  const [error, setError] = useState(null)
  const { id } = useParams()
  const url = 'http://localhost:8080/api/student/'+id


  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    putData(url, data)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(error => console.log(error));
  };


  const getStudentById = () => {
    getData(url)
        .then(res =>{
            console.log(res)
            setStudent({
                name: res.name,
                surname : res.surname,
                phone : res.phone
            })
        })
        .catch(error => {
            setError(error)
            console.log(error)
        })
  }

  useEffect(() => {
    getStudentById()
  }, [])

  return (
    <div>
        <FormComponent btnTxt='EDITAR' onFormSubmit={handleFormSubmit} initialData={student} />
        {
            console.log('ID', id)
        }
    </div>
  )
}

export default UpdatePage