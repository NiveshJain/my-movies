import Breadcrumbs from "./components/Layout/Breadcrumbs";
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Breadcrumbs />
        <main>{children}</main>
      </body>
    </html>
  );
}
