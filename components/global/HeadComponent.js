import React from 'react'
import Head from 'next/head'
const HeadComponent = ({ title, description}) => {
  return (
    <Head>
      <link rel="icon" href="/favicon-smd.ico" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default HeadComponent