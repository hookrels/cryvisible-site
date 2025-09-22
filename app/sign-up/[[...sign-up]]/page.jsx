'use client'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'24px'}}>
      <SignUp routing="path" path="/sign-up" />
    </div>
  )
}
