"use server";
import { createClient } from "next-sanity";

export async function sanityClient() {
  return createClient({
    projectId: process.env.PROJECTID,
    dataset: process.env.DATASET,
    apiVersion: "2023-11-17",
    useCdn: true,
  });
}
