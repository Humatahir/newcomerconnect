import HeroImage from '@/public/website pictures/Toronto_20at_20night,_20Canada.jpg';

export default function HeroHome() {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={HeroImage.src}
          width="1360"
          height="578"
          alt="About"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white" data-aos="zoom-y-out">Your Canadian Dream Starts Here, with <span className="text-canadian-red">Confidence</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-200 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Navigating your move to Canada is a big step. Our immigration and settlement services are here to guide you through every stage of the process, from the first paperwork to your first Canadian winter.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-canadian-red hover:bg-red-700 w-full mb-4 sm:w-auto sm:mb-0" href="/contact">Book a Consultation</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/services">Explore Our Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
