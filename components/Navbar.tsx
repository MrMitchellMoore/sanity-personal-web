import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Navbar() {
  const pages = await getPages();
  return (
    <header className="flex max-w-5xl mx-auto lg:mx-0 px-8 lg:px-0 gap-10">
      <Link
        href={"/"}
        className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 tracking-wide bg-clip-text text-transparent text-lg font-bold"
      >
        Mitchell
      </Link>
      <div className="space-x-3">
        {pages.map((page) => (
          <Link
            className="text-purple-700 py-1 px-1 bg-gray-200 rounded-md hover:bg-purple-400 hover:text-black"
            href={`/${page.slug}`}
            key={page._id}
          >
            {page.title}
          </Link>
        ))}
      </div>
    </header>
  );
}
