import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:56480/api/v1/users'
});

export class AuthApiService {

  signUp(firstName, lastName, email, password, phoneNumber, isSubscribedToNewsletter, isRecruiter) {
    return http.post('sign-up', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      isSubscribedToNewsletter: isSubscribedToNewsletter,
      isRecruiter: isRecruiter
    })
  }

  signIn(email, password) {
    return http.post('sign-in', {
      email: email,
      password: password
    })
      .then(res => {
        if (res.data.token) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
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