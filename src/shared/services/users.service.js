import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});

export class UsersApiService {
  getAll() {
    return http.get(`users`);
  }
  getById(id) {
    return http.get(`users/${id}`);
  }
}