'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    setStatus('sending');
    setStatusMessage('Sending...');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      )
      .then(
        () => {
          setStatus('success');
          setStatusMessage('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          setStatus('error');
          setStatusMessage('Failed to send message. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">

          {/* Page header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h1 className="h1">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-600">Please fill out the form below to get in touch. We will get back to you as soon as possible.</p>
          </div>

          {/* Form */}
          <div className="mx-auto max-w-2xl">
            <form ref={form} onSubmit={sendEmail}>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3 md:w-1/2">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="fullName">Full Name <span className="text-red-600">*</span></label>
                  <input id="fullName" name="fullName" type="text" className="form-input w-full text-gray-800" placeholder="Enter your full name" required />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="email">Email Address <span className="text-red-600">*</span></label>
                  <input id="email" name="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3 md:w-1/2">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="phone">Phone No</label>
                  <input id="phone" name="phone" type="tel" className="form-input w-full text-gray-800" placeholder="Enter your phone number" />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="country">Country of Residence <span className="text-red-600">*</span></label>
                  <input id="country" name="country" type="text" className="form-input w-full text-gray-800" placeholder="Enter your country of residence" required />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3 md:w-1/2">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="education">Education</label>
                  <input id="education" name="education" type="text" className="form-input w-full text-gray-800" placeholder="Enter your highest level of education" />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="experience">Years of Experience</label>
                  <input id="experience" name="experience" type="number" className="form-input w-full text-gray-800" placeholder="Enter your years of experience" />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="message">Message <span className="text-red-600">*</span></label>
                  <textarea id="message" name="message" rows={4} className="form-textarea w-full text-gray-800" placeholder="Please write your message here..." required></textarea>
                </div>
              </div>
              <div className="-mx-3 mt-4 flex flex-wrap">
                <div className="w-full px-3">
                  <button type="submit" className="btn w-full bg-blue-600 text-white hover:bg-blue-700" disabled={status === 'sending'}>Send Message</button>
                </div>
              </div>
               {status !== 'idle' && (
                <p className={`mt-4 text-center text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
} 