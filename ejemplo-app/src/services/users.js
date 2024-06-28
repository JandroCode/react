
export const getUsers = (URL) => {
    return fetch(`${URL}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        });
};

export const saveUsers = (URL, data) => {
    return fetch(URL, {
        method : 'POST',
        headers : {'Content-Type':'application/json'},
        body : JSON.stringify(data)
    })
    .then( res  => {
        if(!res.ok) {
            throw new Error('Error en la solicitud: ', error)
        }
        return res.json()
    })
    .catch(error => {
        console.log('Error: ' , error)
        throw error
    })
}

