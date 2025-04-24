
import fetch from 'node-fetch'; 

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    posts.slice(0, 5).forEach(post => {
      console.log(`#${post.id}: ${post.title}`);
    });
  })
  .catch(err => {
    console.error('Error fetching data:', err);
  })
