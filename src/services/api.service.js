import axios from 'axios';

export default function(query) {
  return new Promise((resolve, reject) => {
    // Simulate connection delay
    setTimeout(() => {
      axios.post('http://localhost:4000/graphql', { query })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    }, 600);
  });
}
