import Link from "next/link";

import Header from "@/components/header";

export default function Home() {
  // Component is executed in the backend/server
  console.log("Hello");

  // Using Next's built in link component ensure having SPA + SSR features (look at refresh of page)

  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
