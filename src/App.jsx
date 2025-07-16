import React, { useEffect, useState } from 'react';
import PostCard from './components/PostCard';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((res) => res.json())
      .then((data) => setPosts(data.data.children))
      .catch((err) => console.error('Error fetching Reddit posts:', err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Reactjs Reddit Feed</h1>
      <div className="grid">
        {posts.map(({ data }) => (
          <PostCard key={data.id} post={data} />
        ))}
      </div>
    </div>
  );
};

export default App;
