import { FetchError } from './FetchError.js';

export function createAPI(baseUrl) {
  const makeRequest = (url, method = 'GET', data) => {
    return fetch(`${baseUrl}/${url}`, {
      method,
      ...(data ? { body: JSON.stringify(data) } : {})
    })
      .then(res => {
        if (!res.ok) {
          return res.json()
            .catch(() => {
              return Promise.reject(new FetchError(res.status, res.statusText));
            })
            .then(error => {
              return Promise.reject(new FetchError(res.status, res.statusText, error));
            });
        }

        return res.json().catch(() => null);
      });
  };

  return {
    get(url) {
      return makeRequest(url);
    },
    post(url, data) {
      return makeRequest(url, 'POST', data);
    },
    patch(url, data) {
      return makeRequest(url, 'PATCH', data);
    },
    put(url, data) {
      return makeRequest(url, 'PUT', data);
    },
    delete(url, data) {
      return makeRequest(url, 'DELETE', data);
    }
  };
}
