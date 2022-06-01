import { useState, useEffect } from 'react';
import Post from '../components/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=20'
      );
      const postsData = await response.json();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);
  return (
    <div className='home-container'>
      <h1>List of All Posts</h1>
      {posts.map((post) => (
        <div className='posts-container' key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Home;
