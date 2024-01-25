"use client"
import Image from "next/image";

const ContactPage = () => {
  console.log("It Loads Here");
  return (
    <>
      <div className="grid grid-cols-2 gap-[5rem] items-center">
        <div className="contact-img">
          <Image src="/images/contact.png" width={500} height={500} />
        </div>
        <div className="content">
          <form action="">
            <div className="group mb-[1rem] flex flex-col gap-[.3rem]">
              <span className="text-[.8rem] opacity-80">Full Name</span>
              <input className="py-3 px-5 border-none outline-none bg-[#ffffff14] rounded-sm" type="text" placeholder="Enter Your Name" />
            </div>
            <div className="group flex mb-[1rem] flex-col gap-[.3rem]">
              <span className="text-[.8rem] opacity-80">Enter Email</span>
              <input className="py-3 px-5 border-none outline-none bg-[#ffffff14] rounded-sm" type="text" placeholder="Email Address" />
            </div>
            <div className="group flex mb-[1rem] flex-col gap-[.3rem]">
              <span className="text-[.8rem] opacity-80">Phone Number</span>
              <input className="py-3 px-5 border-none outline-none bg-[#ffffff14] rounded-sm" type="text" placeholder="Phone Number (Optional)" />
            </div>
            <textarea className="w-full mt-[.5rem] resize-none py-3 px-5 border-none outline-none bg-[#ffffff14] rounded-sm" rows="5" placeholder="Your Message"></textarea>
            <button className="w-full mt-[1rem] rounded-sm bg-[#8831c6] py-3">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
