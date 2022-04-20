import {config} from "./config.js"

class Api {
  constructor({url, token}) {
    this._url = url;
    this._token = token;
  }

  getProducts() {
    return fetch(`${this._url}/products`);
  }

  getPosts() {
    return fetch(`${this._url}/posts`);
  }
}
export default new Api (config)