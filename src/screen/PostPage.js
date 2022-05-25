import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';
import Comments from '../components/Comments';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/' + id
      );

      setPost(data);
    };
    fetchPost();
  }, [id]);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <div md={6}>
        <span>
          <h2>Title Of Page: {post.title}</h2>
        </span>
        <p>{post.body}</p>
        <div>
          <h3>This is the comments section</h3>

          <Comments />
        </div>
      </div>
    </>
  );
};

export default PostPage;
