import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <>
      <div className="bg-[#ffffff08]">
        <div className="blog-img flex gap-4 items-center p-[1rem]">
            <Image src="/images/about.png" width={300} height={500} />
            <span className="rotate-90">01.01.2024</span>
        </div>
        <div className="bottom mt-[1rem] flex flex-col p-[2rem]">
          <h1 className="text-3xl font-bold">Title</h1>
          <p className="py-[.5rem]">Desc</p>
          <Link href="/blog/post" className="mt-[.5rem] text-center rounded-sm w-full bg-[#8831c6] py-2">Read More</Link>
        </div>
      </div>    
    </>
  );
};

export default PostCard;
