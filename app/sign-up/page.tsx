"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return <main style={{ padding: 24 }}><SignUp fallbackRedirectUrl="/app" /></main>;
}