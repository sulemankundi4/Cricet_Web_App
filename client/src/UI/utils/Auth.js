import Cookies from 'js-cookie';

export const isAuthenticated = () => {
  console.log(Cookies.get('token'));
  return !!Cookies.get('token');
};
