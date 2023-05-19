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


