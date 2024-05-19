import Image from "next/image";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Resume",
    href: "/resume",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <div className="flex flex-row justify-between space-x-10 mt-8">
        {pages.map((page) => (
          <a
            key={page.name}
            href={page.href}
            className="hover:underline font-semibold text-lg text-blue-500 underline-offset-4 decoration-2"
          >
            {page.name}
          </a>
        ))}
      </div>
      <div className="flex space-y-4 flex-col h-fit p-10 items-center">
        <Image
          src="/headshot.png"
          alt="headshot"
          width={250}
          height={250}
          className="rounded-full"
        />
        <div className="flex flex-row text-4xl font-semibold justify-center">
          Oscar Wang
        </div>

        {/* <div className="flex flex-row space-x-16 w-fit">
          <a
            className="hover:underline underline-offset-8 decoration-2"
            href="/projects"
          >
            Projects
          </a>
          <a
            className="hover:underline underline-offset-8 decoration-2"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="hover:underline underline-offset-8 decoration-2"
            href="/about"
          >
            About
          </a>
        </div> */}
      </div>
      <main className="flex w-full max-w-[600px] justify-start">
        <h3 className="text-xl font-semibold">About Me</h3>
        <p></p>
      </main>
    </div>
  );
};

export default Page;
