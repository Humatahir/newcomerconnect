import Image from 'next/image';
import Team from '@/components/team';
import AboutImage from '@/public/website pictures/Toronto_20at_20night,_20Canada.jpg';

export const metadata = {
  title: 'About - Newcomer Connect',
  description: 'Learn more about our mission to help newcomers succeed in Canada.',
};

export default function About() {
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
              <h1 className="h1 mb-4">About Newcomer Connect</h1>
              <p className="text-xl text-gray-600">
                We are a dedicated team of professionals passionate about helping newcomers succeed in Canada.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center pb-12 md:pb-20">
                <Image src={AboutImage} width={1024} height={576} alt="About us" className="rounded-lg shadow-xl" />
            </div>

            {/* Vision and Mission */}
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Vision */}
                    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-md">
                        <h2 className="h3 mb-4 text-blue-600">Our Vision</h2>
                        <p className="text-lg text-gray-600">
                        To be the most trusted and comprehensive support system for newcomers in Canada, fostering a community where every individual has the opportunity to thrive and contribute to the nation's multicultural tapestry. We envision a future where the transition to a new life in Canada is seamless, empowering, and filled with opportunities for personal and professional growth.
                        </p>
                    </div>
                    {/* Mission */}
                    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-md">
                        <h2 className="h3 mb-4 text-blue-600">Our Mission</h2>
                        <p className="text-lg text-gray-600">
                        Our mission is to empower newcomers by providing personalized, end-to-end services that simplify the immigration and settlement process. We are committed to offering expert guidance, practical resources, and a supportive network to help individuals and families confidently navigate their journey. We strive to build lasting relationships based on trust, integrity, and a deep understanding of the challenges and opportunities that come with starting a new life in Canada.
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      <Team />
    </>
  );
} 