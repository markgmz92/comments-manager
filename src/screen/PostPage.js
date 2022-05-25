import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/' + id
      );

      setPost(data);
    };
    fetchPost();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/comments?=postId'
      );
      console.log(comments);
      setComments(data);
    };
    fetchComments();
  }, []);

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
          {comments.map((comment) => (
            <div key={comment.post_id}>
              <p>Name: {comment.name}</p>
              <p>Email: {comment.email}</p>
              <p>Comment: {comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostPage;
