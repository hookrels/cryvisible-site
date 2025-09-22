'use client'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'24px'}}>
      <SignIn routing="path" path="/sign-in" />
    </div>
  )
}
