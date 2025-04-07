'use client'

interface FAQ {
    question: string
    answer: string
}

interface ServiceFaqSectionProps {
    title: string
    description: string
    faqs: FAQ[]
}

export default function ServiceFaqSection({ title, description, faqs }: ServiceFaqSectionProps) {
    return (
        <section className="mb-24">
            <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">{title}</h2>
                <hr className="border-gray-600 mb-4 w-full" />
            </div>
            <p className="text-xl text-gray-700 mb-12">
                {description}
            </p>

            <div className="grid gap-8 md:grid-cols-2">
                {(faqs || []).map((faq, index) => (
                    <div key={index} className="p-6 border border-gray-200 rounded-lg">
                        <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                            {faq.question}
                        </h3>
                        <p className="text-gray-700">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
} 