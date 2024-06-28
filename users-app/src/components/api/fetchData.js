
export const getDataFromServer = (url) => {
    return fetch(url)
        .then(res => {
            if(!res.ok) throw new Error('Error en la respuesta del servidor')
            
            return res.json()
        })
        .catch(error => console.log(error))
}

export const postDataToServer = (url, data) =>{
    return fetch(url, {
        method:'POST' , headers :{'Content-Type' : 'application/json'}, body : JSON.stringify(data)
    })
    .then(res => {
        if(!res.ok) throw new Error('Error en la respuesta del servidor')
            
            return res.json()
    })
    .catch(error => console.log(error))
}

export const deleteDataFromServer = (url) => {
    return fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return ""
      })
      .catch(error => {
        console.log(error);
      });
  };


  export const putDataToServer = (url, data) =>{
    return fetch(url, {
        method:'PUT' , headers :{'Content-Type' : 'application/json'}, body : JSON.stringify(data)
    })
    .then(res => {
        if(!res.ok) throw new Error('Error en la respuesta del servidor')
            
            return res.json()
    })
    .catch(error => console.log(error))
}



