import * as types from './actionTypes';
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';

// Example action setting current page
export const setUser = (name) => (dispatch) => {
  // action being created
  dispatch({ 
    type: types.SET_USER,
    payload: name
  })
}

// Example action involing API call
// export const setUser = (user) => (dispatch) => {
//   const request = {
//     method: 'POST',
//     url: '/users/add',
//     data: user
//   }
 
//   axios.request(request).then((response) => {
//     //action being created
//     dispatch({
//       type: types.SET_USER,
//       payload: response.data,
//     });
//   }).catch(console.log("failed to send request"));
// }
