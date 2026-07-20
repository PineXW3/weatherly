import "./globals.css";

export const metadata = {
  title: "Weatherly",
  description: "A full-stack weather dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
