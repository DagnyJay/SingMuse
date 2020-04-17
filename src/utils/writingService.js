import tokenService from './tokenService';
const BASE_URL= '/api/writings';

export default {
    create,
    getAll,
};

function getAll() {
    return fetch(BASE_URL, {
        method: 'GET', 
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    })
    .then(res => res.json());
  }

function create(writing) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(writing)
    }).then(res => res.json());
}