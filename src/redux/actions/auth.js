import types from '../types';
 import store from '../store'
const { dispatch } = store
export const loginContinue = (data) => {

  dispatch({
    type: types.LOGIN,
    payload: data
  })
};

export const logoutContinue = () => {

  dispatch({
    type: types.USER_LOGOUT,

  })
};
export const addData = (res) => {
  dispatch({
    type: 'ADD_DATA',
    payload: res
  })
};
export const deleData = (userId) => {
  dispatch({
    type: 'DELETE_DATA',
    userId

  })
};
export const updateData = (data) => {

  dispatch({
    type: 'Update_Data',
    payload: data


  })

};