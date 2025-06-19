'use client';

import { useEffect } from 'react';
import Cta from '@/components/cta-alternative';
import Image from 'next/image';
import PreArrivalImage from '@/public/website pictures/Beautiful White Sakura Blooming Garden , rainy day.jpg';
import { CheckCircleIcon, RocketLaunchIcon, HomeIcon, TruckIcon, BanknotesIcon, BriefcaseIcon, AcademicCapIcon, HeartIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function PreArrival() {
  const services = [
    {
      title: "Initial Planning & Consultation",
      icon: RocketLaunchIcon,
      points: ["Personal Settlement Strategy", "Virtual Orientation Sessions"]
    },
    {
      title: "Housing Preparation",
      icon: HomeIcon,
      points: ["Accommodation Planning", "Housing Documentation"]
    },
    {
      title: "Moving & Logistics",
      icon: TruckIcon,
      points: ["Relocation Planning", "Essential Items Planning"]
    },
    {
      title: "Financial Preparation",
      icon: BanknotesIcon,
      points: ["Banking & Finance", "Cost Planning"]
    },
    {
      title: "Employment Preparation",
      icon: BriefcaseIcon,
      points: ["Career Planning", "Professional Documentation"]
    },
    {
      title: "Education Planning",
      icon: AcademicCapIcon,
      points: ["School Preparation", "Language Preparation"]
    },
    {
      title: "Healthcare Preparation",
      icon: HeartIcon,
      points: ["Medical Planning"]
    },
    {
      title: "Documents & Legal",
      icon: DocumentTextIcon,
      points: ["Documentation Preparation"]
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
            src={PreArrivalImage}
            layout="fill"
            objectFit="cover"
            alt="Pre-arrival services"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4 text-white">Pre-Arrival Services</h1>
              <p className="text-xl text-gray-200">
                Arrive in Canada confident and prepared. We'll handle the details before you even pack your bags.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="h2 text-center mb-12">Why Choose Our Pre-Arrival Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <CheckCircleIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="h4 mb-2">Proactive Preparation</h3>
              <p className="text-gray-600">We take a proactive approach to planning, addressing potential challenges before they arise.</p>
            </div>
            <div className="p-6">
              <CheckCircleIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="h4 mb-2">Customized Planning</h3>
              <p className="text-gray-600">Your settlement plan is tailored to your unique needs, goals, and circumstances.</p>
            </div>
            <div className="p-6">
              <CheckCircleIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="h4 mb-2">Seamless Transition</h3>
              <p className="text-gray-600">Our goal is to save you time, reduce stress, and ensure your arrival in Canada is as smooth as possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="h2 text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        heading="Ready to Start Planning?"
        buttonText="Book a Consultation"
        buttonLink="/contact"
      />
    </>
  );
} 