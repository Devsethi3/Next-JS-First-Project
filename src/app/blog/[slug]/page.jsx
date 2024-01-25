import Image from "next/image";

const SinglePostPage = () => {
  return (
    <>
      <div className="grid my-[3rem] grid-cols-2">
        <div className="img w-[100%]">
          <Image
            src="https://images.pexels.com/photos/19581193/pexels-photo-19581193/free-photo-of-quaint-izakaya-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={400}
            height={600}
            objectFit="cover"
          />
        </div>
        <div className="content ml-[-10rem]">
          <h1 className="text-5xl mb-[4rem] font-bold">Title</h1>
          <div className="details flex items-center gap-[3rem]">
            <div className="author flex pr-[2rem] border-r-2 border-r-[#ffffff2e] items-center gap-[1rem]">
              <Image
                src="https://images.pexels.com/photos/6821977/pexels-photo-6821977.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width="45"
                height="45"
                className="objec-cover rounded-full"
              />
              <div className="name">
                <h4 className="font-semibold opacity-60 text-lg">Author</h4>
                <p className="text-[.8rem]">Jerry Jefferson</p>
              </div>
            </div>
            <div className="publish">
              <h4 className="font-semibold opacity-60 text-lg">Published</h4>
              <p className="text-[.8rem]">-11-04T09:30</p>
            </div>
          </div>
          <p className="mt-[5rem] opacity-70 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            consectetur reiciendis quidem obcaecati quod nostrum, quis sunt,
            quas doloribus hic vitae in nam! Doloribus dignissimos ad minima
            quibusdam aut nemo aspernatur adipisci vitae tempora dolores
            cupiditate minus ratione laborum rerum tempore eum, nobis deleniti
            possimus, asperiores culpa odit! Fugit tempora fuga porro
            doloremque, mollitia atque exercitationem quod maximum distinctio
            quidem at unde minus. Autem optio sint dolor, voluptatibus ipsam
            quia?
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
