import { getClient } from 'utils/sanity'
import Head from 'next/head'
import groq from 'groq'

import Layout from 'components/Layout'
import PostList from 'components/PostList'

const query = groq`
  *[_type == 'post']
`

const Landing = ({ docs }) => {
  return (
    <Layout>
      <Head>
        <title>Faltpavillon</title>
      </Head>
      <PostList docs={docs} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const docs = await getClient(true).fetch(query)
  return {
    props: { docs }
  }
}

export default Landing
