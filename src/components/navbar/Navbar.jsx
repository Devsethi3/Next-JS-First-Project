import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <>
      <nav className={`flex items-center justify-between`}>
        <Link href="/" className="text-[1.8rem] font-bold">
          LOGO
        </Link>
        <ul>
          <Links />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
