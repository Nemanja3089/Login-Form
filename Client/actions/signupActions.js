import axios from 'axios';

export function userSignupRequest(userData){
 return dispach => {
    return axios.post('/api/users',userData);
 }

}
