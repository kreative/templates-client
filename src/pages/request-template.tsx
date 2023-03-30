import { NextSeo } from "next-seo";
import { Widget } from "@typeform/embed-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RequestTemplate(): JSX.Element {
  return (
    <div>
      <NextSeo
        title="Request Template - Kreative Templates"
        description="Request a template for our team to make for you, for free!"
        canonical="https://kreativetemplates.co/request-template"
        openGraph={{
          type: "website",
          url: "https://kreativetemplates.co/request-template",
          title: "Request Template - Kreative Templates",
          description:
            "Request a template for our team to make for you, for free!",
        }}
      />
      <Navbar />
      <main>
        <div className="flex justify-center">
          <Widget id="B41wM52t" style={{ width: "80rem", height: "70vh" }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
