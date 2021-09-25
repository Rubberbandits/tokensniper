import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function LoadingScreen() {
	return (
		<div className="flex justify-center align-center translate-y-20">
			<button class="btn btn-lg btn-ghost loading">loading</button>
		</div>
	)
}

const useUser = () => ({ user: null, loading: false })

export default function Home() {
	const { user, loading } = useUser()
	const router = useRouter()

	useEffect(() => {
		if (!(user || loading)) {
			router.push('/dashboard/login')
		} else if (user) {
			router.push('/dashboard/main')
		}
	}, [user, loading])

	return (
	<div className="h-screen bg-gray-700">
		<Head>
			<title>Vorsin Tools - Loading</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<LoadingScreen />
	</div>
  )
}