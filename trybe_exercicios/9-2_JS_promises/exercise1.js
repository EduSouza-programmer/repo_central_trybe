const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const fetchJoke = (url, config) => {
  return fetch(url, config)
    .then((resp) => resp.json())
    .then((data) => data.joke);
};

const jokeContainer = document.querySelector('#jokeContainer');

window.onload = async () => {
  jokeContainer.innerHTML = await fetchJoke(API_URL, myObject);
};
