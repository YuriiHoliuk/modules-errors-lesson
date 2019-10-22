import { createAPI } from './api.js';

const api = createAPI('http://localhost:4000');

api.get('content')
  .then(data => console.log(data))
  .catch(error => console.log('content', error));

api.get('empty')
  .then(data => console.log(data))
  .catch(error => console.log('empty', error));

api.get('error')
  .then(data => console.log(data))
  .catch(error => console.log('error', JSON.stringify(error)));
