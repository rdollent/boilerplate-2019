// put reducers here

// action generators
// action generators take all the parameters you need to generate and action
// and returns the object
///example reducer////////////////////////////
// export const nameReducer = (state = 'Anonymous', action) => {
//     switch(action.type) {
//       case 'CHANGE_NAME':
//         return action.name;
//       default:
//         return state;
//     }
// };

import {STORE_CREDENTIALS} from '../actions/types';

export const inputReducer = (state = {input: ''}, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                input: action.input
            }
        default:
            return state;
    }
}

export const credentialsReducer = (state = {username: '', email: '', password: ''}, action) => {
    switch(action.type) {
        case STORE_CREDENTIALS:
            return {
                username: action.username,
                email: action.email,
                password: action.password
            }
        default:
                return state;
    }
}