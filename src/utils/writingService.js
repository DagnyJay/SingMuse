import tokenService from './tokenService';
const BASE_URL= '/api/writings';

export default {
    create
};

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