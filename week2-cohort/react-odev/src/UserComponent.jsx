import React, { useEffect, useState } from 'react';
import getData from './getData';

function UserComponent() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userId = 1;
        const result = await getData(userId);
        setUserData(result);
        console.log(result);
      } catch (error) {
        console.error('Error:', error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.name}</h1>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <h2>Posts:</h2>
          {userData.posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserComponent;
