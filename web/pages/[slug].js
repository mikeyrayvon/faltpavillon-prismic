import { getClient } from 'utils/sanity'
import Head from 'next/head'
import groq from 'groq'

import Layout from 'components/Layout'
import Container from 'components/Container'

const Page = ({ preview, doc }) => {
  return (
    <Layout>
      <Head>
        <title>Faltpavillon{doc.data && doc.title && ` | ${doc.title}`}</title>
      </Head>
      {doc &&
        <Container>
          <div className='dis-row'>
            <div className='dis-item mb-20 md:mb-32'>
              {doc.content &&
                <div className='post-body'>
                  <PortableText blocks={doc.content} />
                </div>
              }
            </div>
          </div>
        </Container>
      }
    </Layout>
  )
};

export const getStaticProps = async ({ params, preview = false }) => {
  const doc = await getClient(preview).fetch(query, {
    slug: params.slug,
  });
  return {
    props: { preview, doc }
  };
};

export const getStaticPaths = async () => {
  const routes = await getClient()
    .fetch(`*[_type == 'page'][].slug.current`)

  return {
    paths: routes.map((slug) => ({ params: { slug } })),
    fallback: true
  }
}

export default Page
