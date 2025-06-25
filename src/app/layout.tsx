import Breadcrumbs from "./_components/layout/Breadcrumbs";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <header className="text-white">
          <p className="text-center text-red-500">Movies Universe</p>
          <Breadcrumbs />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
