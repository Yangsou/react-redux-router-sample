/**
 * @function callApi
 * @param: endPoint, method
 * @returns Promise
 */
const apiURl = 'http://dev.everfit.io:3000';

export const callApi = (endPoint, method = 'GET', body) => {
  return fetch(`${apiURl}${endPoint}`, {
    method,
    body: JSON.stringify(body),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  // .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}