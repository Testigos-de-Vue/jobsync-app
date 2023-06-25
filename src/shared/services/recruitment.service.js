import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:5059/api/v1'
});

export class RecruitmentApiService {
  getAll() {
    return http.get(`recruitment/processes`);
  }

  getById(id){
    return http.get(`recruitment/processes/${id}`);
  }

  getPhases(id){
    return http.get(`recruitment/processes/${id}/phases`);
  }

  getPhasesCount(id){
    return http.get(`recruitment/analytics/processes/${id}/phases/count`);
  }
}