export const metadata = {
  title: 'Our Commitment - Newcomer Connect',
  description: 'Learn about our commitment to your success in Canada.',
};

export default function CommitmentPage() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">

          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h1 className="h1">Our Commitment</h1>
            <p className="mt-4 text-xl text-gray-600">Your trusted partner for a smooth and stress-free settlement.</p>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2">

              {/* Column 1 */}
              <div className="space-y-8">
                <div>
                  <h3 className="h4 mb-4 text-gray-800">Each service is delivered with:</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Personal attention to your specific needs</li>
                    <li>Regular progress monitoring</li>
                    <li>Flexible scheduling options</li>
                    <li>Ongoing support and guidance</li>
                    <li>Cultural sensitivity and understanding</li>
                  </ul>
                </div>
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
              </div>

              {/* Column 2 */}
              <div className="space-y-8">
                <div>
                  <h3 className="h4 mb-4 text-gray-800">Additional Support Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>24/7 emergency contact</li>
                    <li>Monthly settlement workshops</li>
                    <li>Settlement progress tracking</li>
                    <li>Regular check-in meetings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="h4 mb-4 text-gray-800">Why Choose Our Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                    <li>Comprehensive support system</li>
                    <li>Experienced settlement specialists</li>
                    <li>Personalized service plans</li>
                    <li>Proven success record</li>
                    <li>Continuous support availability</li>
                    <li>Cultural competency</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 