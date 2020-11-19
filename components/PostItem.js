import RichTextCustom from 'utils/richText'

const PostItem = ({ post }) => {
  if (post && post.data) {
    return (
      <li className='dis-item mb-20 md:mb-32'>
        {post.data.body.length > 0 &&
          <div className='post-body'>
            <RichTextCustom render={post.data.body} />
          </div>
        }
      </li>
    )
  }
  return null
};

export default PostItem;
