import { Project } from "@/types/Project";
import { groq } from "next-sanity";
import { sanityClient } from "./sanity-client";
import { Page } from "@/types/Page";

const client = sanityClient();

export async function getProjects(): Promise<Project[]> {
  const getClient = await client;
  return getClient.fetch(
    groq`*[_type == "project" && defined(slug.current)]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.alt,
            url,
            content
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const getClient = await client;
  return getClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.alt,
            url,
            content
        }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  const getClient = await client;
  return getClient.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  const getClient = await client;
  return getClient.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
