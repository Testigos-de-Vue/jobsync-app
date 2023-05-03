import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});

export class RecruitmentApiService {
  getAll() {
    return http.get(`recruitments`);
  }
}