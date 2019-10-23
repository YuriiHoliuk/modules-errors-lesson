import { FetchError } from './FetchError.js';

export function fetchData(url) {
  return fetch(`http://localhost:4000${url}`)
    .then(response => {
      if (!response.ok) {
        throw new FetchError(response);
      }

      return response.json();
    })
    // .then(JSONString => {
    //   try {
    //     return JSON.parse(JSONString);
    //   } catch (err) {
    //     console.error(err.message);
    //
    //     return [];
    //   }
    // });
    .catch(err => {
      if (err instanceof FetchError) {
        throw err;
      }

      console.error(err.message);

      return [];
    });
}



// async function fetchData(url) {
//   try {
//     const response = await fetch(`http://localhost:4000${url}`);
//
//     if (!response.ok) {
//       throw new FetchError(response);
//     }
//
//     return await response.json();
//   } catch (err) {
//     if (err instanceof FetchError) {
//       throw err;
//     }
//
//     console.error(err.message);
//
//     return [];
//   }
// }
