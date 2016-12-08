import axios from 'axios';

export function userSignupRequest(userData){
  return dispach => {
    return axios.post('/api/users',userData);
  };

}

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`);
  }
}
