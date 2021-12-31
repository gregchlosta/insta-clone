import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import AddPostModal from '../components/AddPostModal'

export default function Home() {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll'>
      <Head>
        <title>Instagram Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Feed />

      <AddPostModal />
    </div>
  )
}
