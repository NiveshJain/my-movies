import { Breadcrumbs } from "./Breadcrumbs";

export const Layout = ({ children }: { children: any }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-4 px-6 md:px-12 lg:px-24">
        <Breadcrumbs />
      </header>
      <main className="container mx-auto py-8 px-6 md:px-12 lg:px-24">
        {children}
      </main>
    </div>
  );
};
