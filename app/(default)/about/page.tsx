import Image from 'next/image';
import AboutImage from '@/public/website pictures/Toronto_20at_20night,_20Canada.jpg';

export const metadata = {
  title: 'About Our Canadian Immigration Experts | Newcomer Connect',
  description: 'Meet the dedicated team of experienced immigration and settlement specialists at Newcomer Connect, committed to helping you succeed in Canada.',
};

export default function About() {
  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src={AboutImage}
            layout="fill"
            objectFit="cover"
            alt="About Newcomer Connect"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4 text-white">About Newcomer Connect</h1>
              <p className="text-xl text-gray-200">
                We are a dedicated team of professionals passionate about helping newcomers succeed in Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Vision */}
            <div className="rounded-lg border border-gray-200 p-8 shadow-md">
              <h2 className="h3 mb-4 text-canadian-red">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the most trusted and comprehensive support system for newcomers in Canada, fostering a community where every individual has the opportunity to thrive and contribute to the nation's multicultural tapestry.
              </p>
            </div>
            {/* Mission */}
            <div className="rounded-lg border border-gray-200 p-8 shadow-md">
              <h2 className="h3 mb-4 text-canadian-red">Our Mission</h2>
              <p className="text-lg text-gray-600">
                Our mission is to empower newcomers by providing personalized, end-to-end services that simplify the immigration and settlement process. We are committed to offering expert guidance, practical resources, and a supportive network.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 