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
  const nextid = 0;
  return {
    type: 'ADD_DATA',
    payload: {
      id: Math.random,
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
