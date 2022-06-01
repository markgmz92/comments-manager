import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/' + id
      );

      const postData = await response.json();
      setPost(postData);
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments?`
      );

      const postComments = await response.json();
      setComments(postComments);
    };
    fetchComments();
  }, []);

  const filter = (e) => {
    const name = e.target.value;
    const email = e.target.value;
    const body = e.target.value;

    if (name !== '') {
      const newList = comments.filter((comment) => {
        return (
          comment.name.toLowerCase().startsWith(name.toLowerCase()) ||
          comment.email.toLowerCase().startsWith(email.toLowerCase()) ||
          comment.body.toLowerCase().startsWith(body.toLowerCase())
        );
      });
      setComments(newList);
    } else {
      setComments(comments);
    }
  };

  return (
    <>
      <Link className='link' to='/'>
        Go Back
      </Link>
      <div className='post-page'>
        <span>
          <h2>Title Of Page: {post.title}</h2>
        </span>
        <p>{post.body}</p>
        <div className='comments-section'>
          <h3>This is the comments section</h3>
          <input
            type='text'
            placeholder='Search...'
            onChange={filter}
            className='search'
          />
          {comments && comments.length > 0 ? (
            comments.map((comments, index) => (
              <div key={index}>
                <p>Name: {comments.name}</p>
                <p>Email: {comments.email}</p>
                <p>Comment: {comments.body}</p>
              </div>
            ))
          ) : (
            <h1> No Result Found</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default PostPage;
