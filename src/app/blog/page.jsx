import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/data";

const BlogPage = async () => {
  const posts = await getPosts();

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
