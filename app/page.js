import Banner from "./(components)/Banner";
import Footer from "./(components)/Footer";
import Services from "./(components)/Services";
import TechMarquee from "./(components)/TechMarquee";

export default function page() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <Banner />
        <Services />
      </div>
      <div className="flex flex-col justify-end my-20 ">
        <TechMarquee />
      </div>
      <Footer/>
    </div>
  );
}
