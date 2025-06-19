"use client";

import useMasonry from "@/utils/useMasonry";
import Testimonial from "@/components/testimonial";

const testimonials = [
  {
    name: "The Silva Family",
    username: "Brazil to Toronto",
    date: "May 20, 2024",
    content: "Newcomer Connect was our lifeline. Their pre-arrival checklist was invaluable, and they helped us find a great school for our kids. We felt supported every step of the way.",
    channel: "Google",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    username: "India to Vancouver",
    date: "October 12, 2024",
    content: "I was overwhelmed with the Express Entry process. The team at Newcomer Connect clarified everything and helped me optimize my profile. I received my invitation to apply just a few months later. Truly professional service!",
    channel: "Google",
    rating: 5,
  },
  {
    name: "Mohammed Al-Farsi",
    username: "UAE to Calgary",
    date: "January 7, 2025",
    content: "Finding work in a new country is tough. The career services and licensing guidance from Newcomer Connect were critical for me to land a job in my field. Thank you!",
    channel: "Google",
    rating: 5,
  },
  {
    name: "Chloe Dubois",
    username: "France to Montreal",
    date: "March 18, 2025",
    content: "From getting my SIN to opening a bank account, the post-arrival services were a lifesaver. It felt like having a knowledgeable friend in a new city.",
    channel: "Google",
    rating: 5,
  },
];

export default function WallOfLove() {
  const masonryContainer = useMasonry();

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="h2 mb-4">Trusted by Newcomers Across Canada</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - see what our clients have to say.</p>
          </div>
          {/* Testimonials grid */}
          <div
            ref={masonryContainer}
            className="grid items-start gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial
                  testimonial={testimonial}
                  className="w-full rotate-0 md:group-odd:!-rotate-1 md:group-even:!rotate-1"
                >
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
