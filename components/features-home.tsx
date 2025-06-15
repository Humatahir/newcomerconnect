export default function FeaturesHome() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-blue-500 to-gray-900 opacity-40 blur-[160px] will-change-[filter]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Your Journey, Our Expertise</h2>
            <p className="text-xl text-gray-600">We've structured our support to cover every critical stage of your move. From the moment you decide to come to Canada until you're settled in your new home, we're with you.</p>
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-blue-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-5 4.874 1.18 6.882z" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
              </svg>
              <h4 className="h4 mb-2">Immigration Services</h4>
              <p className="text-lg text-gray-600 text-center">Let us handle the paperwork. We offer expert guidance on Express Entry, Family Sponsorship, and Study Permits to ensure your application is strong, complete, and submitted correctly.</p>
            </div>
            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-blue-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-blue-100" strokeWidth="2" strokeLinecap="square" d="M21 35l4 4 12-12" fill="none" fillRule="evenodd" />
              </svg>
              <h4 className="h4 mb-2">Pre-Arrival Planning</h4>
              <p className="text-lg text-gray-600 text-center">Arrive with a plan and peace of mind. We'll help you organize temporary housing, understand local banking, and create a checklist of everything you need for a smooth landing.</p>
            </div>
            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-blue-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-blue-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-blue-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Post-Arrival Support</h4>
              <p className="text-lg text-gray-600 text-center">Hit the ground running. We'll guide you through setting up essential services like healthcare and a SIN, and provide resources for community integration and cultural adaptation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
