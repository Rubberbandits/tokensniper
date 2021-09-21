import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-primary">
      <Head>
        <title>Vorsin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-top w-full flex-1 px-20 text-center">
        <h1 className="text-4xl text-white font-bold">
        	vorsin.tools
        </h1>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t border-cadet">
        <a href="https://digitalgangsters.io" className="text-white">&copy; digitalgangsters.io</a>
      </footer>
    </div>
  )
}
