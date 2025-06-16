import Cta from '@/components/cta-alternative';
import Image from 'next/image';
import PostArrivalImage from '@/public/website pictures/toronto_20city_20skyline.jpg';

export const metadata = {
  title: 'Post-Arrival Services - Newcomer Connect',
  description: 'Comprehensive post-arrival services to ensure you have the support needed to build a successful life in your new home.',
};

export default function PostArrivalPage() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">

          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h1 className="h1">Post-Arrival Services</h1>
          </div>

          <div className="flex justify-center pb-12 md:pb-20">
            <Image src={PostArrivalImage} width={1024} height={576} alt="Post-arrival services" className="rounded-lg shadow-xl" />
          </div>

          {/* Section content */}
          <div className="prose prose-lg mx-auto max-w-4xl text-gray-600">
            <p>
              At Newcomer Connect, we understand that your journey doesn't end when you land in Canada. Our comprehensive post-arrival services ensure you have the support needed to build a successful life in your new home. With over two decades of experience, we've designed our services to address every aspect of your settlement journey.
            </p>
          </div>

          {/* Content */}
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">

            {/* Column 1 */}
            <div className="space-y-8">
              <div>
                <h3 className="h4 mb-4 text-gray-800">1. First 30 Days Essential Setup</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>Airport Welcome Service</li>
                  <li>Government Documentation</li>
                  <li>Banking & Financial Setup</li>
                  <li>Housing & Settlement</li>
                  <li>Healthcare Navigation</li>
                </ul>
              </div>
              <div>
                <h3 className="h4 mb-4 text-gray-800">2. Education & Family Services</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  {/* Add specific services if available */}
                </ul>
              </div>
              <div>
                <h3 className="h4 mb-4 text-gray-800">3. Professional Development</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>Professional Licensing</li>
                </ul>
              </div>
              <div>
                <h3 className="h4 mb-4 text-gray-800">4. Financial & Legal Guidance</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                   {/* Add specific services if available */}
                </ul>
              </div>
              <div>
                <h3 className="h4 mb-4 text-gray-800">5. Community Integration</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                   {/* Add specific services if available */}
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              <div>
                <h3 className="h4 mb-4 text-gray-800">Service Delivery Options</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>In-person support (GTA area)</li>
                  <li>Virtual assistance</li>
                  <li>Phone consultations</li>
                  <li>Email support</li>
                  <li>Weekend appointments available</li>
                </ul>
              </div>
              <div>
                <h3 className="h4 mb-4 text-gray-800">Why Choose Our Post-Arrival Services</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>Comprehensive support system</li>
                  <li>Experienced settlement specialists</li>
                  <li>Personalized service plans</li>
                  <li>Flexible payment options</li>
                  <li>Proven success record</li>
                  <li>Continuous support availability</li>
                  <li>Cultural competency</li>
                </ul>
              </div>
               <div>
                <h3 className="h4 mb-4 text-gray-800">Our Commitment</h3>
                 <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  <li>Personal attention to your specific needs</li>
                  <li>Regular progress monitoring</li>
                  <li>Flexible scheduling options</li>
                  <li>Ongoing support and guidance</li>
                  <li>Cultural sensitivity and understanding</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center pt-16">
            <p className="text-lg text-gray-600">All our services can be customized based on your specific needs and circumstances. Contact us for a detailed discussion of how we can best support your settlement journey in Canada.</p>
          </div>

        </div>
      </div>
      <Cta
        className="overflow-hidden"
        heading="Ready to Settle In?"
        buttonText="View Our Packages"
        buttonLink="/packages"
      />
    </section>
  );
} 