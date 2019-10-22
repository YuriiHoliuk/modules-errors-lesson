import { FetchError } from './FetchError.js';

export function createAPI(baseUrl) {
  const makeRequest = (method, url, data, options = {}) => {
    const init = { method };

    if (data) {
      init.body = JSON.stringify(data);
    }

    if (options.headers) {
      init.headers = options.headers;
    }

    let queryStr = '';

    if (options.query) {
      queryStr = Object.entries(options.query)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

      if (queryStr) {
        queryStr = `?${queryStr}`;
      }
    }

    return fetch(`${baseUrl}/${url}${queryStr}`, init)
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
    get(url, options) {
      return makeRequest('GET', url, null, options);
    },
    post(url, data, options) {
      return makeRequest('POST', url, data, options);
    },
    patch(url, data, options) {
      return makeRequest('PATCH', url, data, options);
    },
    put(url, data, options) {
      return makeRequest('PUT', url, data, options);
    },
    delete(url, data, options) {
      return makeRequest('DELETE', url, data, options);
    }
  };
}
