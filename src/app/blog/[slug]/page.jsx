import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/data";
import Image from "next/image";
import { Suspense } from "react";

const post = await getPost(slug);
return {
  title: post.title,
  description: post.desc,
};

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <>
      <div className="grid my-[3rem] grid-cols-2">
        {post && (
          <div className="img w-[100%]">
            <Image src={post.img} width={400} height={600} objectFit="cover" />
          </div>
        )}
        <div className="content ml-[-10rem]">
          <h1 className="text-5xl mb-[4rem] font-bold">{post?.title}</h1>
          <div className="details flex items-center gap-[3rem]">
            <div className="author flex pr-[2rem] border-r-2 border-r-[#ffffff2e] items-center gap-[1rem]">
              {post && (
                <Suspense fallback={<div>Loading...</div>}>
                  <PostUser userId={post.userId} />
                </Suspense>
              )}
            </div>
            <div className="publish">
              <h4 className="font-semibold opacity-60 text-lg">Published</h4>
              <p className="text-[.8rem]">
                {post.createdAt.toString().slice(4, 16)}
              </p>
            </div>
          </div>
          <p className="mt-[5rem] opacity-70 text-xl">
            {post.desc}
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            consectetur reiciendis quidem obcaecati quod nostrum, quis sunt,
            quas doloribus hic vitae in nam! Doloribus dignissimos ad minima
            quibusdam aut nemo aspernatur adipisci vitae tempora dolores
            cupiditate minus ratione laborum rerum tempore eum, nobis deleniti
            possimus, asperiores culpa odit! Fugit tempora fuga porro
            doloremque, mollitia atque exercitationem quod maximum distinctio
            quidem at unde minus. Autem optio sint dolor, voluptatibus ipsam
            quia? */}
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
