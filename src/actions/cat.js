
export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST,
 
});


export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = err => ({
    type: FETCH_CAT_ERROR,
    err: 'ERROR '
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
    type: FETCH_CAT_SUCCESS,
    cat
});



export const fetchCat = () => dispatch => {
    dispatch(fetchCatRequest());
    fetch('http://localhost:8080/api/cat')
    .then(res =>{
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then( (data) => dispatch(fetchCatSuccess(data)))
    .catch(err => dispatch(fetchCatError(err)));
   
};



export const DELETE_CAT_REQUEST = 'DELETE_CAT_REQUEST';
export const deleteCatRequest = () => ({
    type: DELETE_CAT_REQUEST,
 
});


export const DELETE_CAT_ERROR = 'DELETE_CAT_ERROR';
export const deleteCatError = err => ({
    type: DELETE_CAT_ERROR,
    err: 'ERROR '
});

export const DELETE_CAT_SUCCESS = 'DELETE_CAT_SUCCESS';
export const deleteCatSuccess = cat => ({
    type: DELETE_CAT_SUCCESS,
    cat
});


export const adoptCat = () => dispatch =>{
    dispatch(deleteCatRequest());
    fetch('http://localhost:8080/api/cat', {
        method: 'DELETE',
    })
    .then(res =>{
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(()=>dispatch(fetchCat()))
    .catch(err => dispatch(deleteCatError(err)));

}

