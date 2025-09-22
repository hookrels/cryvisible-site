import { auth } from '@clerk/nextjs/server'

export default async function AppHome() {
  const { userId } = auth()
  return (
    <main style={{ padding: 24 }}>
      <h1>Protected area</h1>
      <p>Signed in as: {userId}</p>
    </main>
  )
}
