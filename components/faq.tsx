import Accordion from "@/components/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "What types of services do you offer?",
      answer:
        "We offer a comprehensive range of services including pre-arrival planning, immigration application assistance, housing support, employment services, and long-term integration support to help you settle into your new life in Canada.",
      active: true,
    },
    {
      question: "Who is eligible for your services?",
      answer:
        "Our services are designed for all newcomers to Canada, including permanent residents, temporary foreign workers, international students, and refugees. We tailor our support to meet your specific immigration status and needs.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "We offer a variety of packages to suit different needs and budgets. Please see our 'Packages' page for detailed information on pricing and what each package includes. We also offer initial consultations to help you choose the right plan.",
    },
    {
      question: "What makes Newcomer Connect different?",
      answer:
        "Our team has over two decades of non-profit experience and a deep, personal understanding of the immigration journey. We provide flexible, one-on-one support and are committed to being your dedicated partner from start to finish.",
    },
    {
      question: "How do I get started?",
      answer:
        "The best way to start is by booking a consultation through our website. This allows us to understand your needs and recommend the best path forward. You can also contact us directly via our contact page.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="h2">Frequently Asked Questions</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  title={faq.question}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.answer}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
