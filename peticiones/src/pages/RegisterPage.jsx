import React, { useState } from 'react';
import FormComponent from '../components/FormComponent';
import { postData } from '../api/apiService';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({});

  const url = "http://localhost:8080/api/student";
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    setFormData(data);

    postData(url, data)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <FormComponent btnTxt='REGISTRAR' onFormSubmit={handleFormSubmit} initialData={{ name: '', surname: '', phone: '' }} />
      <div>
        <h2>Datos del formulario</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default RegisterPage;