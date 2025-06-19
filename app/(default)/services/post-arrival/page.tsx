'use client';

import { useEffect } from 'react';
import Cta from '@/components/cta-alternative';
import Image from 'next/image';
import PostArrivalImage from '@/public/website pictures/view_20of_20Nathan_20Phillips_20Square_20and_20City_20Hall_20in_20Toronto.jpg';
import { CheckCircleIcon, PaperAirplaneIcon, DocumentTextIcon, HomeIcon, BanknotesIcon, UserGroupIcon, BriefcaseIcon, UsersIcon, TruckIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function PostArrival() {
  const services = [
    {
      title: "Airport Welcome",
      icon: PaperAirplaneIcon,
      points: ["Hassle-free airport pickup", "Welcome package with essentials"]
    },
    {
      title: "Government Documentation",
      icon: DocumentTextIcon,
      points: ["SIN, Health Card (OHIP) assistance", "Guidance on other ID cards"]
    },
    {
      title: "Accommodation Support",
      icon: HomeIcon,
      points: ["Temporary housing assistance", "Long-term rental search support"]
    },
    {
      title: "Banking & Financial Setup",
      icon: BanknotesIcon,
      points: ["Bank account opening", "Credit card application guidance"]
    },
    {
      title: "Community Integration",
      icon: UserGroupIcon,
      points: ["Local area orientation tour", "Information on community centers"]
    },
    {
      title: "Career Support Services",
      icon: BriefcaseIcon,
      points: ["Resume and cover letter review", "Job search strategies"]
    },
    {
      title: "Family & Childcare Support",
      icon: UsersIcon,
      points: ["School registration assistance", "Daycare and childcare information"]
    },
    {
      title: "Driving & Transportation",
      icon: TruckIcon,
      points: ["Driver's license information", "Public transit guidance"]
    },
    {
      title: "Ongoing Support",
      icon: PhoneIcon,
      points: ["3 months of email/phone support", "Regular check-ins"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax-image') as HTMLElement;
      if (parallax) {
        const scrolled = window.scrollY;
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src={PostArrivalImage}
            layout="fill"
            objectFit="cover"
            alt="Post-arrival services"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4 text-white">Post-Arrival Services</h1>
              <p className="text-xl text-gray-200">
                You've arrived. Let's make Canada feel like home, together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="h2 text-center mb-12">How We Support Your Settlement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <CheckCircleIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="h4 mb-2">Comprehensive Support</h3>
              <p className="text-gray-600">From essential paperwork to community integration, we cover all bases.</p>
            </div>
            <div className="p-6">
              <CheckCircleIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="h4 mb-2">Personalized Service</h3>
              <p className="text-gray-600">Your settlement plan is customized to your family's unique needs and goals.</p>
            </div>
            <div className="p-6">
              <CheckCircleIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="h4 mb-2">Experienced Specialists</h3>
              <p className="text-gray-600">Our team has a proven track record of helping newcomers thrive in Canada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="h2 text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600 mr-4" />
                  <h3 className="h4">{service.title}</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta
        className="overflow-hidden"
        heading="Ready to Settle In?"
        buttonText="View Our Packages"
        buttonLink="/packages"
      />
    </>
  );
} 