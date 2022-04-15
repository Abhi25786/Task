import types from '../types';

export const loginContinue = (data) => {

  return {
    type: types.LOGIN,
    payload: data
  };
};
export const logoutContinue = () => {

  return {
    type: types.USER_LOGOUT,

  };
};
export const addData = (res) => {
  return {
    type: 'ADD_DATA',
    payload: res
  };
};
export const deleData = (userId) => {
  return {
    type: 'DELETE_DATA',
    userId

  };
};
export const updateData = (data) => {

  return {
    type: 'Update_Data',
    payload: data


  };

};
