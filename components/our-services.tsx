import Link from 'next/link';

export default function OurServices() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4">Our Core Services</h1>
            <p className="text-xl text-gray-600">Your pathway to a successful settlement in Canada. We've structured our support to cover every critical stage of your move, from the first application to your full integration into Canadian life.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <Link href="/services/immigration" className="block relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:shadow-2xl transition">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32"/>
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 39.571L40.5 32.571l-6.014-7-4.029 4-2.014-2-4.029-4-6.014 7 6.014 7 4.029-4 2.014 2 4.029 4z"/>
                    <path className="stroke-current text-white" d="M22.514 39.571L28.5 32.571l-6.014-7-4.029 4-2.014-2-4.029-4-6.014 7 6.014 7 4.029-4 2.014 2 4.029 4z"/>
                  </g>
                </g>
              </svg>
              <h4 className="h4 mb-2">Immigration Services</h4>
              <p className="text-lg text-gray-600 text-center">Expert guidance on Express Entry, Family Sponsorship, Study Permits, and more to make your application process smooth and successful.</p>
            </Link>

            {/* 2nd item */}
            <Link href="/services/pre-arrival" className="block relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:shadow-2xl transition">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32"/>
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <path className="stroke-current text-white" d="M8.571 0l8 8-8 8M0 8h16"/>
                    <path className="stroke-current text-blue-300" d="M8.571 16l8-8-8-8"/>
                  </g>
                </g>
              </svg>
              <h4 className="h4 mb-2">Pre-Arrival Services</h4>
              <p className="text-lg text-gray-600 text-center">Preparation is key. We ensure you're fully prepared before you land, with everything planned and organized for a seamless arrival.</p>
            </Link>

            {/* 3rd item */}
            <Link href="/services/post-arrival" className="block relative flex flex-col items-center p-6 bg-white rounded shadow-xl hover:shadow-2xl transition">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32"/>
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 20l-4 4 4 4"/>
                    <path className="stroke-current text-white" d="M32 28h-6"/>
                    <path className="stroke-current text-blue-300" d="M32 20l4 4-4 4"/>
                    <path className="stroke-current text-blue-300" d="M32 28h6"/>
                  </g>
                </g>
              </svg>
              <h4 className="h4 mb-2">Post-Arrival Services</h4>
              <p className="text-lg text-gray-600 text-center">Your journey doesn't end when you land. We provide comprehensive support for housing, banking, healthcare, and community integration.</p>
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
} 