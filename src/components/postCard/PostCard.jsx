import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <>
      <div>
        <div className="blog-img flex gap-1 items-center p-[1rem]">
          <Image
            src="https://images.pexels.com/photos/19125266/pexels-photo-19125266/free-photo-of-modern-restaurant-interior.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={320}
            height={300}
          />
          <span className="rotate-90">01.01.2024</span>
        </div>
        <div className="bottom mt-[1rem] flex flex-col p-[1rem]">
          <h1 className="text-3xl font-bold">Title</h1>
          <p className="py-[1rem] opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit ipsam tempore reiciendis incidunt necessitatibus nostrum expedita rerum tenetur.</p>
          <Link
            href="/blog/post"
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
