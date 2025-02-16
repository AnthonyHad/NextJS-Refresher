import "./globals.css";

// page, icon, metadata, not-found, error, loading, route, layout and RootLayout are reserved keywords and have some benefits.
// icon in the app folder will set the favicon

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
