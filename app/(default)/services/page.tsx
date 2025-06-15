export const metadata = {
  title: "Services - Newcomer Connect",
  description: "Explore our expert immigration and settlement services.",
};

import OurServices from "@/components/our-services";
import Cta from "@/components/cta-alternative";

export default function Services() {
  return (
    <>
      <OurServices />
      <Cta
        className="overflow-hidden"
        heading="Explore Our Packages"
        buttonText="View Packages"
        buttonLink="/packages"
      />
    </>
  );
}
