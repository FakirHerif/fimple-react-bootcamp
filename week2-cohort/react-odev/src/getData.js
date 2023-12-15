import axios from 'axios';

async function getData(userId) {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const userData = userResponse.data;
    const userPosts = postsResponse.data;

    const mergedData = {
      ...userData,
      posts: userPosts,
    };
    return mergedData;
    
  } catch (error) {
    throw new Error('Error fetching data');
  }
}


export default getData;
