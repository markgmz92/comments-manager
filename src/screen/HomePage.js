import axios from 'axios';
import { useState, useEffect } from 'react';
import Post from '../components/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div className='home_container'>
      <h1>List of All Posts</h1>
      {posts.map((post) => (
        <div classname='posts_container' key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Home;
