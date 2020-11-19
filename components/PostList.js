import Container from './Container'
import PostItem from './PostItem'

const PostList = ({ posts }) => {
  if (posts) {
    return (
      <Container>
        <ul className='dis-row'>
          {posts.map(post => <PostItem post={post} key={post.id} />)}
        </ul>
      </Container>
    )
  }
  return null
};

export default PostList;
