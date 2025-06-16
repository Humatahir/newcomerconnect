import OurServices from '@/components/our-services'
import Image from 'next/image';
import ServicesImage from '@/public/website pictures/view_20of_20Nathan_20Phillips_20Square_20and_20City_20Hall_20in_20Toronto.jpg';

export const metadata = {
  title: 'Our Services - Newcomer Connect',
  description: 'Explore our comprehensive services designed to support you at every stage of your journey to Canada.',
};

import Cta from "@/components/cta-alternative";

export default function Services() {
  return (
    <>
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">
              From initial planning to long-term settlement, we provide end-to-end support to ensure your move to Canada is smooth and successful. Explore our tailored services below.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center pb-12 md:pb-20">
              <Image src={ServicesImage} width={1024} height={576} alt="Our Services" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
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
