import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function AppHome() {
  return (
    <main style={{ padding: 24 }}>
      <SignedIn>
        <h2>Private App Area</h2>
        <p>Only authenticated users can see this. Build features here.</p>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <p>You must sign in to access the app.</p>
        <SignInButton mode="modal">Sign in</SignInButton>
      </SignedOut>
    </main>
  );
}