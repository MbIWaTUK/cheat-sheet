import React from "react"
import { gql } from "@apollo/client"
import { initializeApollo } from "../lib/apolloClient"
import Head from "next/head"

const META = gql`
  query Pages($where: JSON) {
    pages(where: $where) {
      id
      url
      title
      description
      keywords
      content
    }
  }
`

export default function IndexPage({ meta }) {

  return (
    <Head>
      <title>{meta && meta.title ? meta.title : ""}</title>
      <meta
        name="description"
        content={meta && meta.description ? meta.description : ""}
      />
      <meta
        name="keywords"
        content={meta && meta.keywords ? meta.keywords : ""}
      />
    </Head>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: META,
    variables: { where: { url: ctx.pathname } },
  })

  return {
    initialApolloState: apolloClient.cache.extract(),
    meta: data?.pages[0],
  }
}