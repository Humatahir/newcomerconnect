import Image from 'next/image';
import CommitmentImage from '@/public/website pictures/Double_20exposure_20of_20a_20businessman_20handshake_20on_20world.jpg';

export const metadata = {
  title: 'Our Commitment to Newcomers in Canada | Newcomer Connect',
  description: 'Learn about our commitment to providing personalized, stress-free, and comprehensive support for new immigrants starting their life in Canada.',
};

export default function CommitmentPage() {
  const commitments = [
    {
      title: "How We Deliver Our Services",
      points: [
        "Personal attention to your specific needs",
        "Regular progress monitoring",
        "Flexible scheduling options",
        "Ongoing support and guidance",
        "Cultural sensitivity and understanding",
      ]
    },
    {
      title: "Service Delivery Options",
      points: [
        "In-person support (GTA area)",
        "Virtual assistance",
        "Phone consultations",
        "Email support",
        "Weekend appointments available",
      ]
    },
    {
      title: "Why Choose Our Services",
      points: [
        "Comprehensive support system",
        "Experienced settlement specialists",
        "Personalized service plans",
        "Proven success record",
        "Continuous support availability",
        "Cultural competency",
      ]
    }
  ];

  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover"
            src={CommitmentImage}
            layout="fill"
            objectFit="cover"
            alt="Our Commitment"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h1 mb-4 text-white">Our Commitment to You</h1>
              <p className="text-xl text-gray-200">
                Your trusted partner for a smooth and stress-free settlement in Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6">
          {commitments.map((commitment, index) => (
            <div key={index} className="rounded-lg border border-gray-200 p-8 shadow-sm">
              <h3 className="h3 mb-4 text-canadian-red">{commitment.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                {commitment.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
} 