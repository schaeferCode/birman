import axios from 'axios';
import JWT from 'jsonwebtoken';

const AUTH_LOCAL_STORAGE = 'BIRMAN:AUTH:TOKEN';

export default class Service {
  constructor() {
    let service = axios.create({
      baseURL: process.env.VUE_APP_SERVER_URL || 'http://localhost:3000',
      headers: { Authorization: `Bearer ${this.token}` },
    });
    service.interceptors.response.use(this._handleSuccess, this._handleError);
    this.service = service;
  }

  get token() {
    return JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE));
  }

  set token(token) {
    localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(token));
  }

  get user() {
    const decodedToken = this.verifyAndDecodeToken();
    if (!decodedToken) return false;
    const { email, givenName, familyName, linkedAdServices, role } = decodedToken;
    return { email, givenName, familyName, linkedAdServices, role };
  }

  _handleSuccess(response) {
    return response;
  }

  _handleError = (error) => {
    switch (error.response.status) {
      case 401:
        this._redirectTo(document, '/');
        break;
      case 404:
        this._redirectTo(document, '/404');
        break;
      default:
        this._redirectTo(document, '/500');
        break;
    }
    return Promise.reject(error);
  };

  _redirectTo = (document, path) => {
    document.location = path;
  };

  deleteToken() {
    localStorage.removeItem(AUTH_LOCAL_STORAGE);
    delete this.token;
  }

  async get(path) {
    return await this.service.get(path);
  }

  async patch(path, payload) {
    return await this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  async post(path, payload) {
    return await this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  verifyAndDecodeToken() {
    const decodedToken = JWT.decode(this.token);
    if (!decodedToken) return false;
    if (Date.now() >= decodedToken.exp * 1000) {
      return false;
    }
    return decodedToken;
  }
}
