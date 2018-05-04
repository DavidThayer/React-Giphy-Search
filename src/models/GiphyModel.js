import axios from 'axios';
const keys = require('../config/key_api');

class GiphyModel {
  static search = (query) => {
    console.log("Model Query = ", query)
    const request = axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${keys.api_key}`);
    return request;
  }

  static searchById = (id) => {

    const request = axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=${keys.api_key}`);
    return request;
  }
}

export default GiphyModel;
