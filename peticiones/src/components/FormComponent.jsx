import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

function FormComponent({ btnTxt, onFormSubmit, initialData }) {

    const { register, handleSubmit, setValue } = useForm()

    const onSubmit = (formData) => {
        console.log('Datos del componente hijo ', formData)
        onFormSubmit(formData)
    }

    useEffect(() => {
        if (initialData) {
          setValue('name', initialData.name);
          setValue('surname', initialData.surname);
          setValue('phone', initialData.phone);
        }
      }, [initialData, setValue]);



    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-6 m-auto">

                    <div className="card p-4">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className='form-label' id='nombre'>Nombre</label>
                            <input type='text' autoComplete='off' className='form-control mb-2' id='nombre' {...register('name')} />

                            <label className='form-label' id='apellido'>Apellido</label>
                            <input type='text' autoComplete='off' className='form-control mb-2' id='apellido' {...register('surname')} />

                            <label className='form-label' id='telefono'>Teléfono</label>
                            <input type='text' autoComplete='off' className='form-control mb-3' id='telefono' {...register('phone')} />

                            <button type='submit' className='btn btn-outline-primary form-control'>{btnTxt}</button>
                        </form>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default FormComponent