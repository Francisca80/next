// margin-top/src/components/Contact.tsx
"use client";

const ContactSection = () => {
    return (
        <div className="relative bg-cover bg-center" >
            <div className="max-w-4xl mx-auto p-10  ">
                <h2 className="text-3xl font-bold text-center mb-6">Plan een Afspraak</h2>
                <p className="text-center mb-4">Neem de eerste stap naar succes. Plan nu je afspraak met ons!</p>
                <div className="text-center">
                    <a 
                        href="https://calendly.com/your-link" // Replace with your Calendly link
                        className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                    >
                        Maak een Afspraak
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection; 