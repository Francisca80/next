import AboutSection from "@/components/About";
import Hero from "@/components/hero";
import heroImage from "public/home.jpg";

export default function About() {
  return (
  
    <div className="container mx-auto mt-32 px-4">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="w-full md:w-7/12 px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-center md:text-left mt-16 md:mt-0">
            About Us
          </h1>
            
        <AboutSection />
        </div>
      </div>
    </div>
    
  );
}