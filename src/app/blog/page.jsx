import PostCard from "@/components/postCard/PostCard";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {
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
