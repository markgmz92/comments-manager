import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className='my-3 p-3 rounded'>
      <div>
        <strong>{post._id}</strong>
      </div>

      <div>
        <Link to={`/posts/${post.id}`}>
          <div>
            <strong>{post.title}</strong>
          </div>
        </Link>
        <div>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
