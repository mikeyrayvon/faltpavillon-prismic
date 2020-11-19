const PostBody = ({ body }) => {
  console.log(body)
  return (
    <div>
      {body.map(part => {
        if (part.type === 'image') {
          <figure>
            <img src={part.url} alt={part.alt}/>
            <figcaption>{part.alt}</figcaption>
          </figure>
        }
      })}
    </div>
  )
};

export default PostBody;
