import Container from './Container'
import PostItem from './PostItem'

const PostList = ({ docs }) => {
  if (!docs)
    return null

  return (
    <Container>
      <ul className='dis-row'>
        {docs.map(doc => <PostItem doc={doc} key={doc._id} />)}
      </ul>
    </Container>
  )
}

export default PostList
