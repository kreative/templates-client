import { NextSeo } from "next-seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "What is Kreative Templates?",
    answer:
      "Kreative Templates is a website that provides free templates for Obsidian (and more). We currently provide templates for Obsidian, but are working on supporting more applications.",
  },
  {
    question: "Are all the templates just for Obsidian?",
    answer:
      "Yes,  all the templates are for Obsidian. We are working on supporting more applications in the future.",
  },
  {
    question: "Are the templates free?",
    answer:
      "Yes, all templates are free to download and use. We do not charge for any of our templates. However, we are working on allowing other authors to list and sell their templates in the coming future.",
  },
  {
    question: "How do I download the templates?",
    answer:
      'You can download the templates by clicking on the "Download" button on the template page. You will be asked to provide an email for us to send the template too.',
  },
  {
    question: "How do I use the templates?",
    answer:
      "The templates are provided as a markdown file. You can import or copy and paste the contents of the markdown file into Obsidian.",
  },
];

export default function FAQs() {
  return (
    <div>
      <NextSeo
        title="FAQs - Kreative Templates"
        description="Frequently asked question for Kreative Templates"
        canonical="https://kreativetemplates.co/faqs"
        openGraph={{
          type: "website",
          url: "https://kreativetemplates.co/faqs",
          title: "FAQs - Kreative Templates",
          description: "Frequently asked question for Kreative Templates",
        }}
      />
      <Navbar />
      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Can’t find the answer you’re looking for?{" "}
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Drop us a line.
                  </a>
                </p>
              </div>
              <div className="mt-10 lg:col-span-7 lg:mt-0">
                <dl className="space-y-10">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
