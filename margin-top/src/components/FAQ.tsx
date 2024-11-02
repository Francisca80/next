'use client';

import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
    isOpen: boolean;
}

const FAQ: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([
        {
            question: "What is your return policy?",
            answer: "You can return any item within 30 days of purchase for a full refund.",
            isOpen: false,
        },
        {
            question: "How long does shipping take?",
            answer: "Shipping usually takes 5-7 business days, depending on your location.",
            isOpen: false,
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, we offer 24/7 customer support via email and chat.",
            isOpen: false,
        },
        {
            question: "Can I change my order after it's been placed?",
            answer: "If your order hasn't been processed yet, you can change it by contacting our support team.",
            isOpen: false,
        },
    ]);

    const toggleFAQ = (index: number) => {
        setFaqs(prevFaqs => prevFaqs.map((faq, i) => ({
            ...faq,
            isOpen: i === index ? !faq.isOpen : false
        })));
    };

    return (
        <div className="bg-black py-24">
            <div className="max-w-4xl mx-auto p-6">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-700 rounded-lg shadow-md">
                            <div 
                                className="flex justify-between items-center p-4 cursor-pointer bg-gray-800 hover:bg-gray-700"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                                <span className="text-xl">{faq.isOpen ? '-' : '+'}</span>
                            </div>
                            {faq.isOpen && (
                                <div className="p-4 bg-gray-800">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
