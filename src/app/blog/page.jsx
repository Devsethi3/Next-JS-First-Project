import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/data";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const metadata = {
  title: "Next JS Blog Page",
  description: "Welcome to my Blog Page",
};
const BlogPage = async () => {
  // const posts = await getPosts();

  const posts = await getData();

  return (
    <>
      <div className="grid grid-cols-3 gap-[2.5rem]">
        {posts.map((post) => (
          <PostCard key={post.div} post={post} />
        ))}
      </div>
    </>
  );
};

export default BlogPage;
