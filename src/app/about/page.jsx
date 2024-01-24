import Image from "next/image";
const AboutPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-[5rem] items-center">
        <div className="content">
          <h3 className="text-2xl font-bold text-[#c16aff] mb-[2rem]">
            About Agency
          </h3>
          <h1 className="text-5xl font-bold mb-8">
            We Create Digital Ideas That Are Bigger, Bolder, Braver and Better.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos
            mollitia, unde odio sequi ut nemo esse molestias soluta assumenda
            totam rem asperiores omnis reiciendis obcaecati consequuntur dolorem
            molestiae consequatur?
          </p>
          <div className="details flex items-center gap-[2rem] mt-[3rem]">
            <div className="group flex flex-col gap-[.5rem] pr-5 border-r-2 border-r-cyan-300">
              <h2 className="text-3xl font-bold text-[#c16aff]">10k+</h2>
              <p>Year of experience</p>
            </div>
            <div className="group pr-5 border-r-2 border-r-cyan-300 flex flex-col gap-[.5rem]">
              <h2 className="text-3xl font-bold text-[#c16aff]">234k+</h2>
              <p>People reached</p>
            </div>
            <div className="group pr-5 border-r-2 border-r-cyan-300 flex flex-col gap-[.5rem]">
              <h2 className="text-3xl font-bold text-[#c16aff]">5k+</h2>
              <p>Services and plugins</p>
            </div>
          </div>
        </div>
        <div className="about-img">
          <Image src="/images/about.png" width={500} height={500} />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
