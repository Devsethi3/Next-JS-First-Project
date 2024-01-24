import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-[6rem] items-center">
        <div className="home-content">
          <h1 className="text-5xl font-bold">Create A Custom Digital Agency From Scratch</h1>
          <p className="my-[3rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            maiores dolorem, et aliquam ducimus repellendus hic! Possimus
            tempore sint ratione, iste assumenda omnis natus non quibusdam
            corporis, excepturi ipsam nisi.
          </p>
          <div className="buttons flex items-center gap-[4rem]">
            <button className="py-2 px-5 bg-[#8831c6] rounded-sm">Contact</button>
            <button>Learn More</button>
          </div>
          <div className="brand-img mt-[2rem] opacity-40">
            <Image src="/images/brands.png" width={900} height={300} />
          </div>
        </div>
        <div className="home-img">
          <Image src="/images/hero.gif" width={500} height={500} />
        </div>
      </div>
    </>
  );
};

export default page;
