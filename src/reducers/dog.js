import {FETCH_DOG_ERROR,FETCH_DOG_SUCCESS,FETCH_DOG_REQUEST, DELETE_DOG_ERROR, DELETE_DOG_SUCCESS, DELETE_DOG_REQUEST} from '../actions/dog';

const initialState = {
    dog:{},
    loading:false,
    err:null
}

export default function dogReducer(state=initialState, action){

if(action.type === FETCH_DOG_REQUEST){
    return Object.assign({}, state, {
        loading: true
      });
}

else if(action.type === FETCH_DOG_SUCCESS){
    return Object.assign({}, state, {
        loading: false,
        dog: action.dog
    });
}

else if(action.type === FETCH_DOG_ERROR){
    return Object.assign({}, state, {
        loading: false,
        err: action.err
    })
}

if(action.type === DELETE_DOG_REQUEST){
    return Object.assign({}, state, {
        loading: true
      });
}

else if(action.type === DELETE_DOG_SUCCESS){
    return Object.assign({}, state, {
        loading: false,
    });
}

else if(action.type === DELETE_DOG_ERROR){
    return Object.assign({}, state, {
        loading: false,
        err: action.err
    })
}  
}