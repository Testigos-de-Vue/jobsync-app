import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});

export class AuthApiService {
  getUserById(id) {
    return http.get(`users/${id}`);
  }
}