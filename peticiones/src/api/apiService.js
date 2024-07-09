import axios from "axios";


export const getData = (url) =>{
    return axios.get(url)
        .then(res => res.data)
        .catch(error => {
            throw new Error('Error al realizar la solicitd !')
        })
}

export const getDatawithParam = (url, param) =>{
    return axios.get(url, param)
        .then(res => res.data)
        .catch(error => {
            throw new Error('Error al realizar la solicitd !')
        })
}


export const postData = (url, info) =>{
    return axios.post(url, info)
        .then(res => res.data)
        .catch(error => {
            throw new Error('Error al realizar la solicitd !')
        })
}


export const putData = (url, info) =>{
    return axios.put(url, info)
        .then(res => res.data)
        .catch(error => {
            throw new Error('Error al realizar la solicitd !')
        })
}


export const deleteData = (url) =>{
    return axios.delete(url)
        .then(res => res.data)
        .catch(error => {
            throw new Error('Error al realizar la solicitd !')
        })
}
       