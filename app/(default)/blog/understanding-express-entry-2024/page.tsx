import Image from 'next/image'

export const metadata = {
  title: 'Understanding the Express Entry System in 2024 - Newcomer Connect',
  description: 'A deep dive into the Comprehensive Ranking System (CRS), recent category-based selection draws, and tips for optimizing your profile.',
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
                  <h1 className="h1 mb-4" data-aos="fade-up">Understanding the Express Entry System in 2024</h1>
                  <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">A deep dive into the Comprehensive Ranking System (CRS), recent category-based selection draws, and tips for optimizing your profile.</p>
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
                      <span className="text-gray-500">July 25, 2024</span>
                    </div>
                  </div>
                </div>
              </header>

              {/* Article image */}
              <figure className="mb-8" data-aos="fade-up" data-aos-delay="600">
                <Image className="w-full" src={'/images/your-images/blog-01.jpg'} width={1024} height={576} alt="Blog post" />
              </figure>

              {/* Article content */}
              <div className="text-lg text-gray-600">
                <p className="mb-8">
                  The Express Entry system remains Canada's flagship pathway for skilled workers seeking permanent residency. Managed by Immigration, Refugees and Citizenship Canada (IRCC), it's a competitive system that ranks candidates based on a variety of factors. Understanding how it works is the first step towards a successful application.
                </p>
                <h3 className="h3 mb-4 text-gray-800">The Comprehensive Ranking System (CRS)</h3>
                <p className="mb-8">
                  At the heart of Express Entry is the CRS. It's a points-based system used to assess and score your profile in the Express Entry pool. Points are awarded for:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8">
                  <li><strong>Core Human Capital Factors:</strong> Age, level of education, language proficiency in English and/or French, and Canadian work experience.</li>
                  <li><strong>Spouse or Common-law Partner Factors:</strong> Your partner's education, language skills, and work experience can also earn you points.</li>
                  <li><strong>Skill Transferability Factors:</strong> This combines your education and work experience to award additional points.</li>
                  <li><strong>Additional Points:</strong> Awarded for a provincial nomination, a valid job offer, Canadian study experience, or having a sibling in Canada.</li>
                </ul>
                <h3 className="h3 mb-4 text-gray-800">Category-Based Selection Draws</h3>
                <p className="mb-8">
                  In 2023, IRCC introduced category-based selection draws to target candidates with specific skills, work experience, or language abilities. For 2024, the focus remains on candidates in high-demand sectors, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8">
                  <li>Healthcare</li>
                  <li>Science, Technology, Engineering, and Math (STEM) occupations</li>
                  <li>Trades, such as carpenters, plumbers, and contractors</li>
                  <li>Transport and agriculture</li>
                  <li>Strong French-language proficiency</li>
                </ul>
                <p className="mb-8">
                  These draws have lower CRS score requirements for eligible candidates, providing a significant advantage for those who qualify.
                </p>
                <h3 className="h3 mb-4 text-gray-800">Tips for Optimizing Your Profile</h3>
                <p className="mb-8">
                  To maximize your chances, consider the following:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-8">
                  <li><strong>Improve Language Scores:</strong> Retaking your language tests to achieve higher scores can significantly boost your CRS points.</li>
                  <li><strong>Gain More Work Experience:</strong> Another year of skilled work experience can increase your score.</li>
                  <li><strong>Explore Provincial Nominee Programs (PNPs):</strong> A provincial nomination grants you an additional 600 CRS points, virtually guaranteeing an Invitation to Apply (ITA).</li>
                  <li><strong>Complete an Educational Credential Assessment (ECA):</strong> Ensure your foreign education is recognized in Canada.</li>
                </ul>
                <p>
                  Navigating Express Entry can be complex, but with a strategic approach, you can significantly improve your chances of success. Our team at Newcomer Connect is here to guide you through every step of the process.
                </p>
              </div>

            </article>

          </div>
        </div>
      </div>
    </section>
  )
} 