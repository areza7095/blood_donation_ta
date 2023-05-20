import ApiManager from './ApiManager';

export const login = async data => {
  try {
    const result = await ApiManager('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return JSON.parse(error.request._response);
  }
};

export const register = async data => {
  try {
    const result = await ApiManager('/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return JSON.parse(error.request._response);
  }
};

export const newBloodReq = async data => {
  try {
    const result = await ApiManager('/NewBloodRequest', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return JSON.parse(error.request._response);
  }
};

export const getBloodReq = async data => {
  try {
    const result = await ApiManager('/GetBloodRequest', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    });
    return result;
  } catch (error) {
    return JSON.parse(error.request._response);
  }
};

export const getUserInfo = async data => {
  try {
    const result = await ApiManager('/GetUserInfo', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    });
    return result;
  } catch (error) {
    return JSON.parse(error.request._response);
  }
};


