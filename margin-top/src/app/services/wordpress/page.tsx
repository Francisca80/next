'use client';

import React from 'react';
import { FaCogs, FaPalette, FaRocket } from 'react-icons/fa';

const WordPressPage: React.FC = () => {
    return (
        <div className="max-w-full">
            {/* Hero Section */}
            <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(/wordpress/wordpress.jpg)` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white underline" 
                        style={{ textDecorationColor: '#340066' }}>
                        WordPress Development
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl text-white">
                        Krachtige en flexibele websites met &apos;s werelds meest populaire CMS
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <div className="py-24 bg-blue-50">
                <section className="max-w-6xl mx-auto text-left text-white mt-12 mb-12 p-4">
                    <h2 className="text-4xl font-bold mb-8 text-left text-[#340066]">WordPress Development</h2>
                    <p className="text-xl text-left text-gray-700 mb-8">
                        WordPress is uitgegroeid tot meer dan alleen een blogplatform - het is een volwaardig content management systeem dat de ruggengraat vormt van meer dan 40% van alle websites wereldwijd. Bij Margin-Top zetten we WordPress in als een krachtig instrument voor het bouwen van schaalbare, veilige en gebruiksvriendelijke websites.
                        <br /><br />
                        Of u nu een bedrijfswebsite, webshop of custom applicatie nodig heeft, wij zorgen voor een oplossing die perfect aansluit bij uw wensen en doelstellingen.
                    </p>
                </section>

                {/* WordPress Options Grid */}
                <section className="max-w-6xl mx-auto text-left mt-32 md:mt-48 mb-8 md:mb-12 p-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-left text-[#340066]">
                        WordPress Mogelijkheden
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12">
                        Van basis websites tot complexe maatwerkoplossingen - ontdek wat WordPress voor uw organisatie kan betekenen.
                    </p>

                    <div className="grid gap-6 md:gap-12">
                        {/* OnePager Elementor - FIRST */}
                        <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                            
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] text-white mr-4">
                                    <FaRocket className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Optie 01</span>
                                    <h3 className="text-xl md:text-2xl font-bold">OnePager Elementor</h3>
                                </div>
                            </div>

                            <ul className="space-y-3 md:space-y-4 text-gray-700 relative z-10">
                                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Snelle start:</strong> Binnen 2 weken online</span>
                                </li>
                                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Alles-in-één:</strong> Alle belangrijke info op één pagina</span>
                                </li>
                                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Mobiel-eerst:</strong> Perfect responsive design</span>
                                </li>
                            </ul>

                            <div className="mt-6 pt-6 border-t border-[#4F8BD2]/10 relative z-10">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="flex items-center text-[#4F8BD2] font-semibold">
                                        <span className="w-2 h-2 bg-[#4F8BD2] rounded-full mr-2"></span>
                                        Resultaat: Een effectieve website voor een scherpe prijs
                                    </p>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-600">Vast tarief</p>
                                        <p className="text-2xl font-bold text-[#4F8BD2]">€1.295,-</p>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600 mt-2">
                                    <p>✓ Premium OnePager theme</p>
                                    <p>✓ Contact formulier</p>
                                    <p>✓ Google Maps integratie</p>
                                    <p>✓ Basis SEO-optimalisatie</p>
                                </div>
                            </div>
                        </div>
                        {/* End of Selection */}

                        {/* Standard Elementor - SECOND */}
                        <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                            
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] text-white mr-4">
                                    <FaPalette className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Optie 02</span>
                                    <h3 className="text-xl md:text-2xl font-bold">Standaard Elementor</h3>
                                </div>
                            </div>

                            <ul className="space-y-3 md:space-y-4 text-gray-700 relative z-10">
                                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Snelle ontwikkeling:</strong> Ideaal voor kleinere websites en budgetten</span>
                                </li>
                                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Visuele editor:</strong> Eenvoudig zelf content aanpassen</span>
                                </li>
                                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Responsive design:</strong> Perfect op alle apparaten</span>
                                </li>
                            </ul>

                            <div className="mt-6 pt-6 border-t border-[#4F8BD2]/10 relative z-10">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="flex items-center text-[#4F8BD2] font-semibold">
                                        <span className="w-2 h-2 bg-[#4F8BD2] rounded-full mr-2"></span>
                                        Resultaat: Een professionele website binnen kort tijdsbestek
                                    </p>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-600">Vanaf</p>
                                        <p className="text-2xl font-bold text-[#4F8BD2]">€3.000,-</p>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600 mt-2">
                                    <p>✓ Elementor Pro licentie</p>
                                    <p>✓ Premium theme</p>
                                    <p>✓ Basis SEO-optimalisatie</p>
                                </div>
                            </div>
                        </div>
                        {/* End of Selection */}

                        {/* Custom Development - LAST */}
                        <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                            
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] text-white mr-4">
                                    <FaCogs className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Optie 03</span>
                                    <h3 className="text-xl md:text-2xl font-bold">Custom Development</h3>
                                </div>
                            </div>

                            <ul className="space-y-3 md:space-y-4 text-gray-700 relative z-10">
                                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Custom Themes:</strong> Uniek ontwerp dat perfect past bij uw merk</span>
                                </li>
                                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Plugins op Maat:</strong> Specifieke functionaliteit voor uw behoeften</span>
                                </li>
                                <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>API Integraties:</strong> Naadloze verbinding met externe systemen</span>
                                </li>
                            </ul>

                            <div className="mt-6 pt-6 border-t border-[#4F8BD2]/10 relative z-10">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="flex items-center text-[#4F8BD2] font-semibold">
                                        <span className="w-2 h-2 bg-[#4F8BD2] rounded-full mr-2"></span>
                                        Resultaat: Een volledig op maat gemaakte WordPress oplossing
                                    </p>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-600">Vanaf</p>
                                        <p className="text-2xl font-bold text-[#4F8BD2]">€5.000,-</p>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600 mt-2">
                                    <p>✓ Inclusief design</p>
                                    <p>✓ Inclusief development</p>
                                    <p>✓ Inclusief contentmigratie</p>
                                </div>
                            </div>
                        </div>
                        {/* End of Selection */}

                        {/* Optional Extras Section */}
                        <div className="mt-12 bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold mb-6 text-[#340066]">Optionele Extra's</h3>
                            
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-4 border border-[#4F8BD2]/20 rounded-lg">
                                    <h4 className="font-semibold text-[#4F8BD2] mb-2">Hosting</h4>
                                    <p className="text-gray-600 text-sm mb-2">Managed WordPress hosting</p>
                                    <p className="font-bold">Vanaf €30,- /maand</p>
                                </div>
                                
                                <div className="p-4 border border-[#4F8BD2]/20 rounded-lg">
                                    <h4 className="font-semibold text-[#4F8BD2] mb-2">Onderhoud</h4>
                                    <p className="text-gray-600 text-sm mb-2">Updates & security</p>
                                    <p className="font-bold">Vanaf €75,- /maand</p>
                                </div>
                                
                                <div className="p-4 border border-[#4F8BD2]/20 rounded-lg">
                                    <h4 className="font-semibold text-[#4F8BD2] mb-2">SEO Package</h4>
                                    <p className="text-gray-600 text-sm mb-2">Uitgebreide optimalisatie</p>
                                    <p className="font-bold">Vanaf €750,-</p>
                                </div>
                            </div>
                        </div>

                        {/* Price Notice */}
                        <div className="mt-6 text-sm text-gray-600 italic">
                            * Alle genoemde prijzen zijn exclusief BTW
                            <br />
                            * Exacte prijs afhankelijk van specifieke wensen en functionaliteiten
                        </div>
                    </div>
                </section>

                {/* Comparison Section - Also reordered */}
                <section className="max-w-6xl mx-auto mt-16 p-4">
                    <h3 className="text-2xl font-bold mb-6 text-[#340066]">Wanneer kies je voor welke oplossing?</h3>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4 text-[#4F8BD2]">OnePager</h4>
                            <ul className="space-y-2">
                                <li>✓ Snelle lancering gewenst</li>
                                <li>✓ Beperkt budget</li>
                                <li>✓ Compacte website</li>
                                <li>✓ Basis functionaliteit</li>
                                <li>✓ Direct starten</li>
                            </ul>
                            <p className="mt-4 font-semibold">€1.295,-</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4 text-[#4F8BD2]">Standaard Elementor</h4>
                            <ul className="space-y-2">
                                <li>✓ Meerdere pagina's nodig</li>
                                <li>✓ Regelmatige updates</li>
                                <li>✓ Basis webshop mogelijk</li>
                                <li>✓ Zelf content beheren</li>
                                <li>✓ Middellange termijn</li>
                            </ul>
                            <p className="mt-4 font-semibold">Vanaf €3.000,-</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4 text-[#4F8BD2]">Custom Development</h4>
                            <ul className="space-y-2">
                                <li>✓ Complexe functionaliteiten</li>
                                <li>✓ Unieke gebruikerservaring</li>
                                <li>✓ Externe systeem integraties</li>
                                <li>✓ Schaalbaarheid belangrijk</li>
                                <li>✓ Lange termijn investering</li>
                            </ul>
                            <p className="mt-4 font-semibold">Vanaf €5.000,-</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="max-w-6xl mx-auto mt-16 mb-16 p-4">
                    <div className="bg-[#340066] rounded-2xl p-8 text-white">
                        <h3 className="text-2xl text-white font-bold mb-4">Niet zeker welke oplossing het beste bij u past?</h3>
                        <p className="mb-6 text-white/90">
                            Laat ons u helpen de juiste keuze te maken op basis van uw specifieke wensen en doelstellingen.
                        </p>
                        <a 
                            href="mailto:info@margin-top.nl?subject=WordPress Development Informatie"
                            className="inline-block bg-white text-[#340066] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                        >
                            Neem contact op
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WordPressPage;