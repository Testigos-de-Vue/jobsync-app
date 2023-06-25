import axios from "axios";

const http = axios.create({
  baseURL: 'https://jobsyncapitestigosvue.azurewebsites.net/api/v1/users'
});

export class AuthApiService {

  signUp(firstName, lastName, country, email, password, phoneNumber, isSubscribedToNewsletter, isRecruiter) {
    return http.post('sign-up', {
      firstName: firstName,
      lastName: lastName,
      country: country,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      isSubscribedToNewsletter: true,
      isRecruiter: isRecruiter
    })
  }

  signIn(email, password) {
    return http.post('sign-in', {
      email: email,
      password: password
    })
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUserById(id) {
    // TODO: Do implementation
    return http.get(`${id}`);
  }
}