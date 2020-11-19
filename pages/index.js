import Head from 'next/head'

import Prismic from 'prismic-javascript'
import { Client } from 'utils/prismicHelpers'

import DefaultLayout from 'layouts'
import PostList from 'components/PostList'

const Landing = ({ landing, posts }) => {
  return (
    <DefaultLayout>
      <Head>
        <title>Faltpavillon</title>
      </Head>
      <PostList posts={posts} />
    </DefaultLayout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const landing = await Client().getSingle('landing') || {}

  const posts = await Client().query(
    Prismic.Predicates.at('document.type', 'post'), {
      pageSize: 100,
      ...(ref ? { ref } : null)
    },
  ).catch(error => {
    console.log(error)
  }) || {}

  return {
    props: {
      landing,
      posts: posts ? posts.results : [],
      preview
    }
  }
}

export default Landing
