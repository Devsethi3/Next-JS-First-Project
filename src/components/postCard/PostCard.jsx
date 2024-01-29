import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <>
      <div>
        {post && (
          <div className="blog-img flex gap-1 items-center p-[1rem]">
            <Image src={post.img} width={320} height={300} />
            <span className="rotate-90">01.01.2024</span>
          </div>
        )}
        <div className="bottom mt-[1rem] flex flex-col p-[1rem]">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="py-[1rem] opacity-70">{post.body}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-[.5rem] text-center rounded-sm hover:underline w-full bg-[#8831c6] py-2"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostCard;
