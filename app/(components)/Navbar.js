import Image from "next/image";
import Link from "next/link";
import logo from "../../public/ivey.png";
import ContactButton from "./ContactButton";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={200} />
        </Link>

        {/* Nav Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link
            href="/"
            className="hover:text-blue-400 hover:border hover:border-gray-400 hover:px-2 hover:p-1 transition"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="hover:text-blue-400 hover:border hover:border-gray-400 hover:px-2 hover:p-1 transition"
          >
            Services
          </Link>
          <ContactButton/>
        </div>
      </div>
    </nav>
  );
}
