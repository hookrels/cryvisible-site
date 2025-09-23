import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Cryvisible",
  description: "Cryvisible App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen">{children}</body>
      </html>
    </ClerkProvider>
  );
}