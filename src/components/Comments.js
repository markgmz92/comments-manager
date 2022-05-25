import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/comments?={postId}'
      );
      console.log(comments);
      setComments(data);
    };
    fetchComments();
  }, []);
  return (
    <div className='container'>
      <h4>List of All Comments</h4>
      <Search />
      {comments.map((comments) => (
        <div className='comments_conainter' key={comments.Postid}>
          <div className='comments_name'>
            <h4>Name: {comments.name}</h4>
          </div>
          <div className='comments_email'>
            <h5>Email: {comments.email}</h5>
          </div>
          <div className='comments_body'>
            <h5>Email: {comments.body}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
