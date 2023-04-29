import Image from "next/image";
import { NextSeo } from "next-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhatsObsidian(): JSX.Element {
  return (
    <div>
      <NextSeo
        title="What's Obsidian - Kreative Templates"
        description="Learn more about Obsidian and how it can help you become more productive"
        canonical="https://kreativetemplates.co/whats-obsidian"
        openGraph={{
          type: "website",
          url: "https://kreativetemplates.co/whats-obsidian",
          title: "What's Obsidian - Kreative Templates",
          description:
            "Learn more about Obsidian and how it can help you become more productive",
        }}
      />
      <Navbar />
      <main>
        <div className={"max-w-3xl mx-auto"}>
          <Image
            src={"/obsidian-preview.png"}
            alt={"Obsidian preview image from obsidian.md"}
            className={"w-full h-auto pt-12"}
            width={500}
            height={300}
          />
          <h1 className={"text-left text-5xl font-bold py-8"}>
            So what exactly is Obsidian?
          </h1>
          <p className={"py-4 text-xl"}>
            In recent years, the rise of digital tools has dramatically impacted
            how we organize our lives, particularly in the form of note-taking.
            One note-taking app that has gained popularity recently is Obsidian
            Notes. Obsidian is a versatile note-taking app that utilizes a
            knowledge graph, a unique way of connecting and visualizing notes.
            Here are some of the features and benefits of Obsidian Notes.
          </p>
          <h2 className={"pt-8 text-2xl font-bold"}>Overview</h2>
          <p className={"py-4 text-xl"}>
            First, Obsidian Notes allows you to create and organize your notes
            in an intuitive and straightforward manner. The app&apos;s user
            interface is clean and minimalistic, and the notes are organized as
            a collection of markdown files that are stored locally on your
            computer. This means that you can use the full power of your
            operating system&apos;s file management tools to organize and manage
            your notes. Additionally, Obsidian Notes supports backlinks, which
            are automatic links between notes that allow you to quickly navigate
            between related concepts and ideas.
          </p>
          <h2 className={"pt-8 text-2xl text-left font-bold"}>
            Search & Filters
          </h2>
          <p className={"py-4 text-xl text-left"}>
            Second, Obsidian Notes provides a powerful search function that
            allows you to quickly find the information you need. The search
            function is context-aware, which means that it takes into account
            the content of your notes as well as their metadata, such as tags
            and titles. You can also use filters to narrow down your search
            results further, making it easier to find the information you need.
          </p>
          <h2 className={"pt-8 text-2xl text-left font-bold"}>Extensibility</h2>
          <p className={"py-4 text-xl text-left"}>
            Third, Obsidian Notes is highly customizable, which means that you
            can tailor it to your specific needs and preferences. For example,
            you can choose from a wide range of themes and plugins that can
            extend the app&apos;s functionality. Obsidian Notes also has a
            vibrant community that provides support and resources for users,
            including tutorials, plugins, and themes.
          </p>
          <h2 className={"pt-8 text-2xl text-left font-bold"}>
            Your Second Brain
          </h2>
          <p className={"py-4 text-xl text-left"}>
            Fourth, Obsidian Notes encourages a growth mindset by facilitating
            the development of knowledge networks. The app&apos;s unique feature
            of graph view allows users to visualize their notes as a network of
            interconnected ideas, which can help users to identify patterns and
            connections between seemingly disparate topics. This feature can be
            especially useful for creative projects, research, and
            brainstorming.
          </p>
          <h2 className={"pt-8 text-2xl text-left font-bold"}>
            Private & Secure
          </h2>
          <p className={"py-4 text-xl text-left"}>
            Fifth, Obsidian Notes respects your privacy and security. The app
            stores your notes locally on your computer, which means that your
            data is under your control. Additionally, you can encrypt your notes
            with a password for an extra layer of security. Obsidian Notes also
            allows you to export your notes in a variety of formats, such as
            PDF, Markdown, and HTML, so you can easily share your work with
            others.
          </p>
          <h2 className={"pt-8 text-2xl text-left font-bold"}>
            That&apos;s a Wrap!
          </h2>
          <p className={"py-4 text-xl text-left"}>
            Obsidian Notes is a powerful and versatile note-taking app that
            offers a range of features and benefits for users. Its clean and
            intuitive interface, powerful search function, customizability,
            focus on knowledge networks, and respect for privacy and security
            make it an excellent choice for anyone looking to improve their
            note-taking and knowledge management skills. Whether you are a
            student, researcher, writer, or professional, Obsidian Notes can
            help you to organize and connect your ideas in a way that is both
            efficient and effective.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
