"use client";

import { useState } from "react";

export default function ComparePlans() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true)

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Find the Right Support Package for You</h2>
            <p className="text-xl text-gray-600">We offer a range of packages to provide the exact level of support you need. Whether you're planning from abroad or have already arrived, we have a solution for you.</p>
          </div>

          {/* Pricing tabs */}
          <div className="flex justify-center max-w-[700px] mx-auto mb-8 lg:mb-16">
            <div className="relative flex w-full p-1 bg-gray-200 rounded-full">
              <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                <span className={`absolute inset-0 w-1/2 bg-white rounded-full shadow-sm shadow-black/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'}`}></span>
              </span>
              <button className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-gray-800' : 'text-gray-500'}`} onClick={() => setIsAnnual(true)} aria-pressed={isAnnual}>In-Person</button>
              <button className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-gray-500' : 'text-gray-800'}`} onClick={() => setIsAnnual(false)} aria-pressed={!isAnnual}>Virtual</button>
            </div>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* Pricing table 1 */}
            <div className="relative flex flex-col h-full p-6 rounded-lg border border-gray-200 shadow-md" data-aos="fade-up">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="h4 text-blue-600 mb-1">Basic</div>
                <div className="text-3xl font-bold text-gray-800 mt-2">Pre-arrival Virtual Support Package</div>
              </div>
              <div className="font-medium mb-3">
                <div className="text-lg text-gray-800">Key Features:</div>
              </div>
              <ul className="text-gray-600 -mb-2 grow">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>2 Zoom consultations (1 hour each)</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Documentation checklist</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Basic guidance for housing</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Email support for 1 month</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Settlement planning guide</span>
                </li>
              </ul>
              <div className="mt-8">
                <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" href="/contact">Request a Quote</a>
              </div>
            </div>

            {/* Pricing table 2 */}
            <div className="relative flex flex-col h-full p-6 rounded-lg border border-gray-200 shadow-md bg-white" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute top-0 right-0 mr-6 -mt-4">
                <div className="inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Most Popular</div>
              </div>
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="h4 text-blue-600 mb-1">Standard</div>
                <div className="text-3xl font-bold text-gray-800 mt-2">Arrival and Settlement Package</div>
              </div>
              <div className="font-medium mb-3">
                <div className="text-lg text-gray-800">Everything in Kickstarter, plus:</div>
              </div>
              <ul className="text-gray-600 -mb-2 grow">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Airport Welcome Service</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Government Documentation Assistance</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Accommodation support</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Banking & Financial Setup</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>1 month of email/phone support</span>
                </li>
              </ul>
              <div className="mt-8">
                <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" href="/contact">Request a Quote</a>
              </div>
            </div>

            {/* Pricing table 3 */}
            <div className="relative flex flex-col h-full p-6 rounded-lg border border-gray-200 shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="h4 text-blue-600 mb-1">Premium</div>
                <div className="text-3xl font-bold text-gray-800 mt-2">Premium Settlement Package</div>
              </div>
              <div className="font-medium mb-3">
                <div className="text-lg text-gray-800">Everything in Welcome, plus:</div>
              </div>
              <ul className="text-gray-600 -mb-2 grow">
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>3 months of comprehensive support</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>School/daycare search assistance</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Career Services & Professional Licensing</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Weekly check-ins and progress monitoring</span>
                </li>
                <li className="flex items-center mb-2">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.28 2.28L3.989 8.575 1.72 6.28A1 1 0 00.28 7.72l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  <span>Priority support for emergencies</span>
                </li>
              </ul>
              <div className="mt-8">
                <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" href="/contact">Request a Quote</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
