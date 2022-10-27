import Head from 'next/head'
import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navigation/Navbar'

export default function Layout({children, title, metaContent, image="img/Laravel.png"}) {
  return (
    <>
    <Head>
      <title>{title} | Porte-folie Nico</title>
      <meta  name='description' content={metaContent} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaContent} />
      <meta property='og:type' content='porte-folio' />
      <meta property='og:image' content={image} />
      {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
    </Head>
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow '>
            {children}
        </main>
        <Footer />
    </div>
    </>
  )
}
