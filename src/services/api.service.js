import axios from 'axios';

export default function(query, variables) {
  return new Promise((resolve, reject) => {
    // Simulate connection delay
    setTimeout(() => {
      axios.post('http://localhost:4000/graphql', { query, variables })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    }, 600);
  });
}
