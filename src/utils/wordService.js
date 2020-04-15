const BASE_URL = 'https://random-word-api.herokuapp.com';

export default {
    getRandomWords
};

function getRandomWords() {
    return fetch(`${BASE_URL}/word?number=3`)
    .then(res => res.json());
}