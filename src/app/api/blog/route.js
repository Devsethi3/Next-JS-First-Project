import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post Deleted");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete posts!");
  }
};
