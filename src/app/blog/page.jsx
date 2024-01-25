import PostCard from "@/components/postCard/PostCard";

const BlogPage = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-[2.5rem]">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default BlogPage;
