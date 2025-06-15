import Cta from '@/components/cta-alternative';

export const metadata = {
  title: 'Pre-Arrival Services - Newcomer Connect',
  description: 'Preparing for your Canadian journey with our expert guidance to ensure a smooth arrival.',
};

export default function PreArrivalPage() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">

            {/* Page header */}
            <div className="mx-auto max-w-3xl pb-12 text-center">
              <h1 className="h1">Preparing for Your Canadian Journey</h1>
              <p className="mt-4 text-xl text-gray-600">At Newcomer Connect, we understand that preparation is key to a successful transition to Canada. Our pre-arrival services are designed to ensure you're fully prepared before you land. With our expert guidance, you'll have everything planned and organized for a smooth arrival in your new home.</p>
            </div>

            {/* Content */}
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">

              {/* Column 1 */}
              <div className="space-y-8">
                <div>
                  <h3 className="h4 mb-4 text-gray-800">1. Initial Planning & Consultation</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Personal Settlement Strategy</li>
                    <li>Virtual Orientation Sessions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="h4 mb-4 text-gray-800">2. Housing Preparation</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Accommodation Planning</li>
                    <li>Housing Documentation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="h4 mb-4 text-gray-800">3. Moving & Logistics</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Relocation Planning</li>
                    <li>Essential Items Planning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="h4 mb-4 text-gray-800">4. Financial Preparation</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Banking & Finance</li>
                    <li>Cost Planning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="h4 mb-4 text-gray-800">5. Employment Preparation</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Career Planning</li>
                    <li>Professional Documentation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="h4 mb-4 text-gray-800">6. Education Planning</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>School Preparation</li>
                    <li>Language Preparation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="h4 mb-4 text-gray-800">7. Healthcare Preparation</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Medical Planning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="h4 mb-4 text-gray-800">8. Documents & Legal</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Documentation Preparation</li>
                  </ul>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-8">
                <div>
                  <h3 className="h4 mb-4 text-gray-800">Service Delivery Methods</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Virtual consultations</li>
                    <li>Email support</li>
                    <li>Phone meetings</li>
                    <li>Document review services</li>
                    <li>Online resource access</li>
                  </ul>
                </div>
                <div>
                  <h3 className="h4 mb-4 text-gray-800">Why Choose Our Pre-Arrival Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Proactive preparation approach</li>
                    <li>Customized planning</li>
                    <li>Expert guidance</li>
                    <li>Time and stress saving</li>
                    <li>Cost-effective solutions</li>
                    <li>Seamless transition support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="h4 mb-4 text-gray-800">Getting Started</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Book an initial consultation</li>
                    <li>Receive needs assessment</li>
                    <li>Choose your service package</li>
                    <li>Begin preparation process</li>
                    <li>Regular progress reviews</li>
                    <li>Arrival coordination</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-3xl text-center pt-16">
              <p className="text-lg text-gray-600">Our pre-arrival services can be customized to meet your specific needs and circumstances. Contact us for a detailed discussion of how we can best prepare you for your Canadian journey.</p>
            </div>

          </div>
        </div>
      </section>
      <Cta
        className="overflow-hidden"
        heading="Ready to Start Planning?"
        buttonText="Book a Consultation"
        buttonLink="/contact"
      />
    </>
  );
} 