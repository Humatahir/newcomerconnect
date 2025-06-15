export const metadata = {
  title: 'Immigration Services - Newcomer Connect',
  description: 'Expert guidance on Express Entry, Family Sponsorship, Study Permits, and more to make your application process smooth and successful.',
};

export default function ImmigrationPage() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">

          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h1 className="h1">Immigration Services</h1>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-3xl">
            <div className="text-lg text-gray-600">
              <p className="mb-8">
                At Newcomer Connect, we recognize that immigrating to Canada can be a significant endeavour. That's why we offer a range of immigration services, including Express Entry, Family Sponsorship, Investors Entrepreneur & Self Employed Stream, Study Permit, Visit Visa, and Work Permit assistance. Our goal is to make your journey to Canada as smooth as possible, just like our pre and post-arrival services.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="h4 mb-2 text-gray-800">Express Entry</h3>
                  <p>Assistance for skilled workers seeking permanent residency.</p>
                </div>
                <div>
                  <h3 className="h4 mb-2 text-gray-800">Family Sponsorship</h3>
                  <p>Guidance for sponsoring spouses, children, or other family members.</p>
                </div>
                <div>
                  <h3 className="h4 mb-2 text-gray-800">Investor & Entrepreneur Programs</h3>
                  <p>Support for business immigration or self-employment pathways.</p>
                </div>
                <div>
                  <h3 className="h4 mb-2 text-gray-800">Study Permits</h3>
                  <p>Expert advice on securing study permits for academic success in Canada.</p>
                </div>
                <div>
                  <h3 className="h4 mb-2 text-gray-800">Work Permits</h3>
                  <p>Help with obtaining employer-specific or open work permits.</p>
                </div>
                <div>
                  <h3 className="h4 mb-2 text-gray-800">Visitor Visas</h3>
                  <p>Guidance for tourist, family, or business visit applications.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 