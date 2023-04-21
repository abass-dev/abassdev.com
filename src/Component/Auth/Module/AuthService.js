import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('/api/auth/login', {
      username,
      password,
    });
    const { token } = response.data;
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
};
