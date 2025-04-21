import Image from "next/image";
import Link from "next/link";
import logo from "../../public/ivey.png";

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
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="#services" className="hover:text-blue-400 transition">
            Services
          </Link>
          <Link href="/contact" className="bg-blue-300 px-4 py-2 rounded-xl text-xl font-semibold hover:text-black ml-2 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
