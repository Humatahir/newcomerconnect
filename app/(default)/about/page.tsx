import Team from '@/components/team'

export default function About() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12">
              <h1 className="h1 mb-4">About Us</h1>
              <p className="text-xl text-gray-600">
                At Newcomer Connect, we understand that every newcomer's journey to Canada is unique. With over two decades of experience in the non-profit sector, we specialize in making your transition to Canadian life seamless and successful. Our comprehensive pre-arrival and settlement services are designed to support you at every step of your journey.
              </p>
              <p className="text-xl text-gray-600 mt-6">
                We believe in personalized support, offering one-on-one guidance tailored to your specific needs, goals, and circumstances. Whether you're preparing for your move or have recently arrived, our experienced team is here to ensure your successful integration into Canadian society.
              </p>
            </div>

            {/* Vision and Mission */}
            <div className="max-w-5xl mx-auto md:flex md:space-x-12">
              <div className="md:w-1/2">
                <h2 className="h3 mb-4 text-center">Our Vision</h2>
                <p className="text-lg text-gray-600 text-center">To create a seamless and stress-free transition for new immigrants arriving in Canada, empowering them to settle successfully into their new communities and build brighter futures.</p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <h2 className="h3 mb-4 text-center">Our Mission</h2>
                <p className="text-lg text-gray-600 text-center">Our mission is to empower immigrants with the tools, resources, and knowledge needed to thrive in Canada. By offering tailored support and embracing diversity, we aim to foster an inclusive and welcoming environment that contributes to a stronger Canadian society.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Team />
    </>
  )
} 