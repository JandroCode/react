

export const getDataFromServer = (url) => {

    return fetch(url)
        .then(res => {
            if(!res.ok) throw new Error('Error en la respuesta del servidor')
            
            return res.json()
        })
        .catch(error => console.log(error))
}
