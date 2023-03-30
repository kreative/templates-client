import Head from "next/head";
import { NextSeo } from "next-seo";
import { Widget } from "@typeform/embed-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BecomeAnAuthor(): JSX.Element {
  return (
    <div>
      <NextSeo
        title="Become an Author - Kreative Templates"
        description="Become an author and sell your own templates to the world on Kreative Templates"
        canonical="https://kreativetemplates.co/become-an-author"
        openGraph={{
          type: "website",
          url: "https://kreativetemplates.co/become-an-author",
          title: "Become an Author - Kreative Templates",
          description:
            "Become an author and sell your own templates to the world on Kreative Templates",
        }}
      />
      <Navbar />
      <main>
        <div className="flex justify-center">
          <Widget id="L1s2W5RT" style={{ width: "80rem", height: "70vh" }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
