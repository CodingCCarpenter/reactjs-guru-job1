import axios from "axios";
import { getHeaders } from "./auth";
const baseURL = "https://api.auditpro.io/v1/";
axios.defaults.baseURL = baseURL;

axios.defaults.headers.common = getHeaders();

/* inlined for debug
	{
      "token": localStorage.access_token,
      "user_id": localStorage.user_id,
      "client_id": localStorage.client_id
    };
*/

const authenticate = axios.create({ baseURL: baseURL });

export default {
  user: {
    login: credentials => authenticate.post("login",null, { headers: credentials } ).then(res => res).catch(err => console.log(err))
  },
  table: {
    //data: () => axios.get("getstores").then(res => res).catch(err => console.log(err))
    data: credentials => axios.get("getstores",null,{headers: credentials}).then(res => res).catch(err => console.log(err))
  }
};