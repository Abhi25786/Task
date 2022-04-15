import types from '../types';

export const loginContinue = () => {
  return {
    type: types.LOGIN,
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
