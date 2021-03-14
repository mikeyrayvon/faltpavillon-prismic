import Prismic from 'prismic-javascript'
import Head from 'next/head'

import { queryRepeatableDocuments } from 'utils/queries'
import { Client } from 'utils/prismicHelpers'
import RichTextCustom from 'utils/richText'

import DefaultLayout from 'components/DefaultLayout'
import Container from 'components/Container'

const Route = ({ preview, doc }) => {
  if (doc) {
    return (
      <DefaultLayout>
        <Head>
          <title>Faltpavillon{doc.data && doc.data.title && ` | ${doc.data.title}`}</title>
        </Head>
        <Container>
          <div className='dis-row'>
            <div className='dis-item mb-20 md:mb-32'>
              {doc.data && doc.data.body && doc.data.body.length > 0 &&
                <div className='post-body'>
                  <RichTextCustom render={doc.data.body} />
                </div>
              }
            </div>
          </div>
        </Container>
      </DefaultLayout>
    )
  }
  return null
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData

  const doc = await Client().getByUID('route', params.uid, ref ? { ref } : null) || {}

  return {
    props: {
      preview,
      doc,
    }
  }
}

export async function getStaticPaths() {
  const docs = await queryRepeatableDocuments((doc) => doc.type === 'route')

  return {
    paths: docs.map(doc => `/routes/${doc.uid}`),
    fallback: true,
  }
}

export default Route;
