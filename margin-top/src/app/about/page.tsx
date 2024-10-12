import Hero from "@/components/hero";
import heroImage from "public/home.jpg";

export default function About() {
  return (
  <div>

    <Hero imgData={heroImage.src} imgAlt="hero" title="About" />
  
  </div>
  );
}