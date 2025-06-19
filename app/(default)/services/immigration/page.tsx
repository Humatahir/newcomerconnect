import Image from 'next/image';
import ImmigrationImage from '@/public/website pictures/Emigrate.jpg';

export const metadata = {
  title: 'Canadian Immigration Application Assistance | Newcomer Connect',
  description: 'Expert help with your Canadian immigration application. We offer services for Express Entry, Family Sponsorship, Study Permits, Visitor Visas, and Work Permits.',
};

export default function ImmigrationPage() {
  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src={ImmigrationImage}
            layout="fill"
            objectFit="cover"
            alt="Immigration Services"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4 text-white">Immigration Services</h1>
              <p className="text-xl text-gray-200">
                Let us handle the paperwork. We offer expert guidance on Express Entry, Family Sponsorship, and Study Permits to ensure your application is strong, complete, and submitted correctly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              At Newcomer Connect, we recognize that immigrating to Canada can be a significant endeavour. That's why we offer a range of immigration services, including Express Entry, Family Sponsorship, Investors Entrepreneur & Self Employed Stream, Study Permit, Visit Visa, and Work Permit assistance. Our goal is to make your journey to Canada as smooth as possible, just like our pre and post-arrival services.
            </p>
            <h3 className="h3 mt-12 text-canadian-red">Our Core Immigration Services:</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <h4 className="h4 mb-2 text-gray-800">Express Entry</h4>
                <p>Profile creation, CRS optimization, and application management.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <h4 className="h4 mb-2 text-gray-800">Family Sponsorship</h4>
                <p>Guidance for sponsoring a spouse, partner, child, or parent.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <h4 className="h4 mb-2 text-gray-800">Study Permits</h4>
                <p>Assistance with school applications and study permit processing.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <h4 className="h4 mb-2 text-gray-800">Work Permits</h4>
                <p>Support for various work permit applications, including LMIA-based and LMIA-exempt.</p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <h4 className="h4 mb-2 text-gray-800">Visitor Visas</h4>
                <p>Guidance for tourist, family, or business visit applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 