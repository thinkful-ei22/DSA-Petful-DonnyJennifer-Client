import {FETCH_CAT_ERROR,FETCH_CAT_SUCCESS,FETCH_CAT_REQUEST,DELETE_CAT_ERROR, DELETE_CAT_SUCCESS, DELETE_CAT_REQUEST} from '../actions/cat';

const initialState = {
   cat:{},
    loading:false,
    err:null
}

export default function catReducer(state=initialState, action){

if(action.type === FETCH_CAT_REQUEST){
    return Object.assign({}, state, {
        loading: true
      });
}

else if(action.type === FETCH_CAT_SUCCESS){
    return Object.assign({}, state, {
        loading: false,
        cat: action.cat
    });
}

else if(action.type === FETCH_CAT_ERROR){
    return Object.assign({}, state, {
        loading: false,
        err: action.err
    })
}

if(action.type === DELETE_CAT_REQUEST){
    return Object.assign({}, state, {
        loading: true
      });
}

else if(action.type === DELETE_CAT_SUCCESS){
    return Object.assign({}, state, {
        loading: false,
    });
}

else if(action.type === DELETE_CAT_ERROR){
    return Object.assign({}, state, {
        loading: false,
        err: action.err
    })
}  
}