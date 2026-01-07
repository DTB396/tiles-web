import "./globals.css";

export const metadata = {
  title: "Tiles MVP",
  description: "Public viewer + builder UI (localStorage) prototype."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
