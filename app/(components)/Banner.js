import Image from "next/image";
import logo from "../../public/logo.png";

export default function Banner() {
  return (
    <div className="md:flex md:justify-between md:items-center md:gap-10">
      <div className="md:w-[45%] flex justify-center items-center">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold text-blue-400 my-8">Ivey Solutions</h1>
          <p className="my-2 text-xl font-md text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            odio beatae distinctio aliquid harum itaque earum. Necessitatibus
            odit aspernatur temporibus.
          </p>
        </div>
      </div>
      <div>
        <Image src={logo} alt="Logo" width={320}></Image>
      </div>
    </div>
  );
}
