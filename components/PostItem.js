import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'prismic-configuration'

const PostItem = ({ post }) => {
  if (post && post.data) {
    return (
      <li className='w-full md:w-1/2 px-8 mb-20 md:mb-32'>
        {post.data.body.length > 0 &&
          <div className='post-body'>
            <RichText render={post.data.body} linkResolver={linkResolver} />
          </div>
        }
      </li>
    )
  }
  return null
};

export default PostItem;
