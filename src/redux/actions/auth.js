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
export const addData = (data) => {

  return {
    type: 'ADD_DATA',
    payload: {
      id: Math.floor(Math.random() * 100),
      data: data,
    },
  };
};
export const deleData = (id) => {
  return {
    type: 'DELETE_DATA',
    id

  };
};
