import "./globals.css";

export const metadata = {
  title: "Tiles",
  description: "Profile tiles builder"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 68c1b569 (Initial Tiles Web app (Next.js + builder + viewer))
