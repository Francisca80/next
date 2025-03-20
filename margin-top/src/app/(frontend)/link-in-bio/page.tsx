import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Bio() {
    const links = [
        { href: "https://margin-top.com", text: "Visit margin-top.com" },
        { href: "https://calendly.com/francisca-margin-top", text: "Plan a call" },
        { href: "https://www.margin-top.com/cases", text: "Cases" },
    ];

    const socialLinks = [
        { href: "https://www.linkedin.com/company/margin-top", icon: FaLinkedin, label: "LinkedIn" },
        { href: "mailto:francisca@margin-top.com", icon: MdEmail, label: "Email" },
        { href: "https://www.instagram.com/margin_top_/", icon: FaInstagram, label: "Instagram" },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="mb-8 relative">
                <div className="absolute -inset-2  bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-lg opacity-70"></div>
                <Image
                    src="/logo.png"
                    alt="Margin-Top Logo"
                    width={200}
                    height={80}
                    className="w-auto h-auto"
                    priority
                />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Margin-Top</h1>
            <p className="text-gray-600 mb-8 text-center max-w-md">
                Creating bold and innovative digital experiences that elevate your brand
            </p>

            <div className="flex flex-col gap-4 w-full max-w-md">
                {links.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-gradient-to-b from-[#6EC1E4] to-[#4F8BD2] !text-white py-4 px-6 rounded-lg text-center hover:from-[#4F8BD2] hover:to-[#6EC1E4] transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden group transform hover:-translate-y-1"
                    >
                        <span className="relative z-10">{link.text}</span>
                    </a>
                ))}
            </div>

            <div className="mt-12 flex gap-6 justify-center">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#4F8BD2] transition-colors duration-300"
                        aria-label={social.label}
                    >
                        <social.icon className="w-6 h-6" />
                    </a>
                ))}
            </div>

            <div className="mt-8 text-sm text-gray-600 text-center">
                <p className="mb-2">Ready to elevate your digital presence?</p>
                <p>© 2024 Margin-Top. All rights reserved.</p>
            </div>

            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#6EC1E4]/10 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#4F8BD2]/10 to-transparent opacity-50"></div>
        </div>
    );
}