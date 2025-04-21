import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";

// export const revalidate = 5; // Another way of imposing caching on the file but not on the request itself
// export const dynamic = "force-dynamic" // This is the same as the no-store option in the fetch request. It forces the page to be revalidated on every request. This also removes route cache at build time.
export default async function MessagesPage() {
  unstable_noStore(); // Alows to disable caching for one component. Good for components that have other components inside.
  const response = await fetch("http://localhost:8080/messages", {
    cache: "no-store", // Force-cache is the default for next 14. No-store is the devault in next 15.
    next: {
      revalidate: 5, // Revalidate every 5 seconds - This is another way to handle caching
    },
    headers: {
      "X-ID": "page",
    },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
