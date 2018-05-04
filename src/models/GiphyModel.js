import axios from 'axios';
const API_KEY = 'vYTVrbmf6yTatvG6l2qnvHjWYLa6tTXv';

class GiphyModel {
  static search = (query) => {
    console.log("Model Query = ", query)
    const request = axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`);
    return request;
  }

  static searchById = (id) => {

    const request = axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`);
    return request;
  }
}

export default GiphyModel;
