import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-3 px-10 border-b-[1px] shadow-sm">
      <div className="flex gap-10 items-center">
        <Image src={"/logo.svg"} alt="logo" width={120} height={60} />
        <ul className="hidden md:flex gap-6">
          <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">
            Home
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">
            History
          </li>
          <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">
            Help
          </li>
        </ul>
      </div>

      <UserButton />
    </nav>
  );
};

export default Navbar;
