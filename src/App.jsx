import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import './App.css'

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton className="signin"/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}