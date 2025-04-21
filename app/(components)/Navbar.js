import Image from "next/image";
import Link from "next/link";
import logo from "../../public/ivey.webp";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={200} />
        </Link>

        {/* Nav Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="#services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
