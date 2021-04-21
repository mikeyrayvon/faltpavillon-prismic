import { PortableText } from 'utils/sanity'

const PostItem = ({ doc }) => {
  if (!doc)
    return null

  return (
    <li className='dis-item mb-20 md:mb-32'>
      {doc.content &&
        <div className='post-body'>
          <PortableText blocks={doc.content} />
        </div>
      }
    </li>
  )
}

export default PostItem
