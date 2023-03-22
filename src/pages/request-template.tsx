import Head from "next/head";
import { Widget } from "@typeform/embed-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RequestTemplate(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Request Template - Kreative Templates</title>
        <meta
          name="description"
          content="Request a template for our team to make for you, for free!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
