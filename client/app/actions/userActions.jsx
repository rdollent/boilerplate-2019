import { SET_CURRENT_USER, STORE_CREDENTIALS } from './types';

// userData = { username: string, expires: string }
// setting user data in state.

export const loginUser = userData => (dispatch) => {
  const stringifiedData = JSON.stringify(userData);

  localStorage.setItem('userData', stringifiedData);

  dispatch({
    type: SET_CURRENT_USER,
    payload: userData
  });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('userData');

  dispatch({
    type: SET_CURRENT_USER,
    payload: { username: '', expires: '' }
  });
};

///////////////////////////////////
export const storeCredentials = (data) => {
  return {
    type: STORE_CREDENTIALS,
    username: data.username,
    email: data.email,
    password: data.password
  }

}