import Head from "next/head";
import { Widget } from "@typeform/embed-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RequestTemplate(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Become an author - Kreative Templates</title>
        <meta
          name="description"
          content="Become an author and sell your own templates to the world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
