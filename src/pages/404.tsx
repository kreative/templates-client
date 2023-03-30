import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFoundPage() {
  return (
    <div>
      <NextSeo
        title="Whoops - Kreative Templates"
        description="Kreative Templates - Markdown templates for Obsidian note taking application and more"
        canonical="https://kreativetemplates.co/404"
        openGraph={{
          type: "website",
          url: "https://kreativetemplates.co/404",
          title: "Whoops - Kreative Templates",
          description:
            "Kreative Templates - Markdown templates for Obsidian note taking application and more",
        }}
      />
      <Navbar />
      <main>
        <div className="bg-white py-44 px-6 md:grid md:place-items-center lg:px-8">
          <div className="mx-auto max-w-max">
            <main className="sm:flex items-center">
              <Image
                src="/notfound.gif"
                width={404}
                height={384}
                alt="404"
                className="h-44 w-auto"
              />
              <div className="sm:ml-6">
                <div className="sm:pl-6">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Page not found
                  </h1>
                  <p className="mt-4 text-lg text-gray-600">
                    Please check the URL in the address bar and try again.
                  </p>
                </div>
                <div className="mt-4 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <Link
                    href="/"
                    className="inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Go find templates
                  </Link>
                  <Link
                    href="https://support.kreativeusa.com/templates"
                    className="inline-flex items-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Contact support
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
