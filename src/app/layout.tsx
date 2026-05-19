import "./globals.css";
import "leaflet/dist/leaflet.css";

export const metadata = {
  title: "N-Vision 2.0",
  description: "AI-powered municipality management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}