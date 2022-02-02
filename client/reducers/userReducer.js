import * as types from '../actions/actionTypes';

// define initial state 
const initialState = {
  name: 'Guest'
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    // example case: update user
    case types.SET_USER: {
      return {
        ...state,
        name: action.payload,
      };
    }
    // default state 
    default: return { ...state };
  } 
}

export default userReducer;