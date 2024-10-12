import Hero from "@/components/hero";
import heroImage from "public/home.jpg";
import LogoSlider from "@/components/logo-slider";
import Carousel from "@/components/carousel";
export default function Home() {
  return (
  <div>

    <Hero imgData={heroImage.src} imgAlt="hero" title="Margin Top" />
    <LogoSlider />
    <Carousel />
  </div>
  );
}
