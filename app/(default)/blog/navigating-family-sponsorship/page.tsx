import Image from 'next/image'

export const metadata = {
  title: 'Navigating the Family Sponsorship Application Process - Newcomer Connect',
  description: 'A step-by-step guide to sponsoring a spouse, partner, or child, including financial requirements and processing times.',
}

export default function BlogPost() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">

            <article>

              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1 className="h1 mb-4" data-aos="fade-up">Navigating the Family Sponsorship Application Process</h1>
                  <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">A step-by-step guide to sponsoring a spouse, partner, or child, including financial requirements and processing times.</p>
                </div>
                {/* Author meta */}
                <div className="md:flex md:items-center md:justify-between mt-5">
                  {/* Author image */}
                  <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                    <a href="#">
                      <Image className="rounded-full shrink-0 mr-4" src={'/images/your-images/avatar-01.jpg'} width={40} height={40} alt="Author 01" />
                    </a>
                    <div>
                      <a href="#" className="font-medium text-gray-900 hover:text-blue-600 transition duration-150 ease-in-out">Jane Doe</a>
                      <span className="text-gray-500"> - </span>
                      <span className="text-gray-500">July 23, 2024</span>
                    </div>
                  </div>
                </div>
              </header>

              {/* Article image */}
              <figure className="mb-8" data-aos="fade-up" data-aos-delay="600">
                <Image className="w-full" src={'/images/your-images/blog-03.jpg'} width={1024} height={576} alt="Blog post 03" />
              </figure>

              {/* Article content */}
              <div className="text-lg text-gray-600">
                <p className="mb-8">
                  Family reunification is a cornerstone of Canada's immigration policy. The family sponsorship program allows Canadian citizens and permanent residents to sponsor their loved ones for permanent residency. While the process is straightforward, it requires meticulous attention to detail.
                </p>
                <h3 className="h3 mb-4 text-gray-800">Who Can You Sponsor?</h3>
                <p className="mb-8">
                  The most common sponsorship applications are for:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8">
                  <li><strong>Spouse, Common-law Partner, or Conjugal Partner:</strong> You can sponsor your partner if you are married, have lived together for at least 12 months, or are in a committed relationship but unable to live together.</li>
                  <li><strong>Dependent Children:</strong> Children under 22 years of age who do not have a spouse or common-law partner.</li>
                  <li><strong>Parents and Grandparents:</strong> This program operates on a lottery system, with a limited number of spots available each year.</li>
                </ul>
                <h3 className="h3 mb-4 text-gray-800">Key Sponsorship Requirements</h3>
                <p className="mb-8">
                  As a sponsor, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8">
                  <li>Be at least 18 years old.</li>
                  <li>Be a Canadian citizen, a permanent resident of Canada, or a person registered in Canada as an Indian under the Canadian Indian Act.</li>
                  <li>Sign an undertaking to provide for the basic needs of the person you are sponsoring for a set period. This is a binding financial commitment.</li>
                  <li>Meet the Minimum Necessary Income (MNI) requirements for your family size if you are sponsoring anyone other than a spouse or partner.</li>
                </ul>
                <h3 className="h3 mb-4 text-gray-800">The Application Process</h3>
                <p className="mb-8">
                  The application process involves two parts: your application to become a sponsor and your family member's application for permanent residence. Both are submitted together. IRCC assesses both applications simultaneously. Processing times can vary, but ensuring your application is complete and accurate from the start is the best way to avoid unnecessary delays.
                </p>
                <p>
                  Sponsoring a family member is a significant commitment. Our team at Newcomer Connect provides compassionate and expert guidance to ensure your family can be reunited in Canada as smoothly and quickly as possible.
                </p>
              </div>

            </article>

          </div>
        </div>
      </div>
    </section>
  )
} 