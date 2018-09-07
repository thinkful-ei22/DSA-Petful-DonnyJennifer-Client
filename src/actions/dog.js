import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST,
 
});


export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = err => ({
    type: FETCH_DOG_ERROR,
    err: 'ERROR '
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
});



export const fetchDog = () => dispatch => {
    dispatch(fetchDogRequest());
    fetch(`${API_BASE_URL}/api/dog`)
    .then(res =>{
        // console.log('DOG RESPONSE',res);
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then( (data) => dispatch(fetchDogSuccess(data)))
    .catch(err => dispatch(fetchDogError(err)));
   
};

export const DELETE_DOG_REQUEST = 'DELETE_DOG_REQUEST';
export const deleteDogRequest = () => ({
    type: DELETE_DOG_REQUEST,
 
});


export const DELETE_DOG_ERROR = 'DELETE_DOG_ERROR';
export const deleteDogError = err => ({
    type: DELETE_DOG_ERROR,
    err: 'ERROR '
});

export const DELETE_DOG_SUCCESS = 'DELETE_DOG_SUCCESS';
export const deleteDogSuccess = dog => ({
    type: DELETE_DOG_SUCCESS,
    dog
});


export const adoptDog = () => dispatch =>{
    console.log('ADOPE DOG CALLED');
    dispatch(deleteDogRequest());
    fetch(`${API_BASE_URL}/api/dog`, {
        method: 'DELETE',
    })
    .then(res =>{
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(()=>dispatch(fetchDog()))
    .catch(err => dispatch(deleteDogError(err)));

}
