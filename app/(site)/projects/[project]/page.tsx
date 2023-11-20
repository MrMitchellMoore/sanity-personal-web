import Link from "next/link";
import Image from "next/image";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="flex flex-col justify-center items-center w-full py-20 text-white">
      <div className="max-w-3xl">
        <header className="flex justify-center items-center space-x-10">
          <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 tracking-wide bg-clip-text text-transparent text-2xl md:text-7xl font-extrabold">
            {project.name}
          </h1>
          <Link
            href={project.url}
            className="bg-gray-100 text-gray-500 font-bold py-3 px-4 whitespace-nowrap rounded-md hover:bg-green-300 hover:text-green-700 drop-shadow transition"
          >
            View Project
          </Link>
        </header>
        <div className="text-lg mt-5 text-center">
          <PortableText value={project.content} />
        </div>
        <div className="w-full flex justify-center items-center p-2 md:p-0">
          <Image
            src={project.image}
            alt={project.alt}
            width={1920}
            height={1080}
            priority
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
