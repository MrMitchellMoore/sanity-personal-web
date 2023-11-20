import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  //console.log(projects);
  return (
    <div>
      <h1 className="text-7xl font-extrabold text-white text-center">
        Hello I&apos;m{" "}
        <span className="px-1 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 tracking-wide bg-clip-text text-transparent">
          Mitchell
        </span>
        !
      </h1>
      <p className="mt-1 text-xl text-gray-400 px-2">
        I love to build things! Curious by nature and a love of analytics. Check
        out some of my projects!
      </p>
      <h2 className="mt-10 font-bold text-gray-500 text-3xl mx-10 md:mx-2">
        Projects
      </h2>

      <div className="mt-5 grid grid-cols-1 mx-10 md:grid-cols-2 md:mx-4 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="w-full h-full border-2 border-gray-500 rounded-lg"
            key={project._id}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="object-cover rounded-b-sm border border-gray-500 w-full h-4/5"
              />
            )}
            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 tracking-wide bg-clip-text text-transparent p-2 mt-1">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
