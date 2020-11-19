import { RichText, Elements } from 'prismic-reactjs';

import { linkResolver } from 'prismic-configuration'

// -- Function to add unique key to props
const propsWithUniqueKey = (props, key) => {
  return Object.assign(props || {}, { key });
};

const htmlSerializer = (type, element, content, children, key) => {
  if (type === 'image') {
    return (
      <figure key={key}>
        <img
          src={element.url}
          alt={element.alt || ''}
          copyright={element.copyright || ''}
        />
        {element.alt &&
          <figcaption className='mt-2 text-sm'>{element.alt}</figcaption>
        }
      </figure>
    )
  }

  // Return null to stick with the default behavior for everything else
  return null
}

const RichTextCustom = ({ render }) => {
  return (
    <RichText
      render={render}
      linkResolver={linkResolver}
      htmlSerializer={htmlSerializer}
    />
  )
}

export default RichTextCustom