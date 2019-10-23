import { fetchData } from './src/api.js';

function main() {
  fetchData('/content')
    .then(data => console.log('/content', data));

  fetchData('/empty')
    .then(data => console.log('/empty', data));

  fetchData('/error')
    .then(data => {
      console.log('/error', data);
    })
    .catch(error => console.error('logic error', error));
}

main();
