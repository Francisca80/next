'use client';

import React from 'react';
import { FaCogs, FaPalette, FaRocket } from 'react-icons/fa';
import Image from 'next/image';

const WordPressPage: React.FC = () => {
    return (
        <div className="max-w-full">
            {/* Hero Section */}
            <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(/wordpress/wordpress.jpg)` }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center !text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 !text-white underline"
                        style={{ textDecorationColor: '#340066' }}>
                        WordPress Development
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl !text-white">
                        Krachtige en flexibele websites met &apos;s werelds meest populaire CMS
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <div className="py-24 bg-blue-50">
                <section className="max-w-6xl mx-auto text-left !text-white p-4">
                    <h2 className="text-4xl font-bold mb-8 text-left text-[#340066]">WordPress Development</h2>
                    <p className="text-xl text-left text-gray-700 mb-8">
                        WordPress is uitgegroeid tot meer dan alleen een blogplatform - het is een volwaardig content management systeem dat de ruggengraat vormt van meer dan 40% van alle websites wereldwijd. Bij Margin-Top zetten we WordPress in als een krachtig instrument voor het bouwen van schaalbare, veilige en gebruiksvriendelijke websites.
                        <br /><br />
                        Of u nu een bedrijfswebsite, webshop of custom applicatie nodig heeft, wij zorgen voor een oplossing die perfect aansluit bij uw wensen en doelstellingen.
                    </p>
                </section>

                {/* WordPress Options Grid - Reduced top margin */}
                <section className="max-w-6xl mx-auto text-left mt-8 mb-8 md:mb-12 p-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-left text-[#340066]">
                        WordPress aanbod
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12">
                        Van basis websites tot complexe maatwerkoplossingen - ontdek wat WordPress voor uw organisatie kan betekenen.
                    </p>

                    <div className="grid gap-6 md:gap-12">
                        {/* OnePager Elementor - FIRST */}
                        <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>

                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaRocket className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Optie 01</span>
                                    <h3 className="text-xl md:text-2xl font-bold">OnePager WordPress Website</h3>
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
                                    <p>✓ Website in Wordpress met Elementor theme</p>
                                    <p>✓ 1 pagina met alle belangrijke informatie</p>
                                    <p>✓ Contact formulier, bedanktpagina, 404-pagina, algemene voorwaarden & privacybeleid</p>
                                    <p>✓ Basis SEO-optimalisatie</p>
                                </div>
                            </div>
                        </div>
                        {/* End of Selection */}

                        {/* Standard Elementor - SECOND */}
                        <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>

                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaPalette className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Optie 02</span>
                                    <h3 className="text-xl md:text-2xl font-bold">Standaard WordPress Website</h3>
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
                                    <p>✓ Website in Wordpress met Elementor theme</p>
                                    <p>✓ 5 pagina&apos;s (excl. salespagina&apos;s</p>
                                    <p>✓  Compleet op maat gemaakt ontwerp</p>
                                    <p>✓ Contact formulier, bedanktpagina, 404-pagina, algemene voorwaarden & privacybeleid</p>
                                    <p>✓ Basis SEO-optimalisatie</p>
                                    <div className="mt-4 pt-4 border-t border-[#4F8BD2]/10">
                                        <p className="font-semibold text-[#4F8BD2] mb-2">Uitbreidingsmogelijkheden:</p>
                                        <p>• Extra pagina: €135,- (excl. salespagina&apos;s)</p>
                                        <p>• Blog module: €350,-</p>
                                        <p>• Salespagina: vanaf €450,-</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of Selection */}

                        {/* Custom Development - LAST */}
                        <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>

                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaCogs className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Optie 03</span>
                                    <h3 className="text-xl md:text-2xl font-bold">Custom WordPress Website</h3>
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
                            * De teksten, foto's en andere content/branding worden op tijd aangeleverd.

                        </div>
                    </div>
                </section>

                {/* Comparison Section - Also reordered */}
                <section className="max-w-6xl mx-auto mt-16 p-4">
                    <h3 className="text-2xl font-bold mb-6 text-[#340066]">Wanneer kies je voor welke oplossing?</h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4 text-[#4F8BD2]">OnePager WordPress Website</h4>
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
                            <h4 className="text-xl font-semibold mb-4 text-[#4F8BD2]">Standaard WordPress Website</h4>
                            <ul className="space-y-2">
                                <li>✓ Meerdere pagina's nodig</li>
                                <li>✓ Regelmatige updates</li>
                                <li>✓ Fotogallerij</li>
                                <li>✓ Pop-ups</li>
                                <li>✓ Zelf content beheren</li>
                                <li>✓ Middellange termijn</li>
                            </ul>
                            <p className="mt-4 font-semibold">Vanaf €3.000,-</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4 text-[#4F8BD2]">Custom WordPress Website</h4>
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
                    <div className="bg-[#340066] rounded-2xl overflow-hidden shadow-2xl">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="md:w-1/3 relative h-[300px] md:h-auto">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#340066]/80 to-transparent z-10" />
                                <Image 
                                    src="/wordpress/wordpressdev.jpg" 
                                    alt="WordPress Development"
                                    fill
                                    priority
                                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    quality={90}
                                />
                            </div>

                            {/* Content Section */}
                            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl !text-white font-bold mb-4 transform hover:translate-x-2 transition-transform duration-300">
                                    Niet zeker welke oplossing het beste bij u past?
                                </h3>
                                <p className="mb-8 !text-white/90 text-lg leading-relaxed transform hover:translate-x-2 transition-transform duration-300">
                                    Laat ons u helpen de juiste keuze te maken op basis van uw specifieke wensen en doelstellingen.
                                    Wij denken graag met u mee over de beste WordPress oplossing voor uw project.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="mailto:info@margin-top.nl?subject=WordPress Development Informatie"
                                        className="inline-block bg-white text-[#340066] px-6 py-3 rounded-lg font-semibold 
                                        hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg 
                                        transform hover:translate-y-[-2px] hover:scale-105 text-center"
                                    >
                                        Neem contact op
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FAQ Section */}
                <section className="max-w-6xl mx-auto mt-16 p-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#340066]">Veelgestelde vragen</h2>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                        {/* FAQ Item 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-semibold mb-3 text-[#4F8BD2]">
                                Waarom zou ik voor WordPress kiezen?
                            </h3>
                            <p className="text-gray-700">
                                WordPress is het meest gebruikte CMS ter wereld, met een marktaandeel van meer dan 40%. Het biedt een perfecte balans tussen gebruiksgemak, flexibiliteit en schaalbaarheid. Daarnaast is er een enorme community die constant nieuwe functionaliteiten en plugins ontwikkelt.
                            </p>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-semibold mb-3 text-[#4F8BD2]">
                                Hoe zit het met de beveiliging van WordPress?
                            </h3>
                            <p className="text-gray-700">
                                WordPress is van zichzelf veilig, maar vereist wel regelmatig onderhoud. Wij zorgen voor een stevige beveiliging door het implementeren van SSL, regelmatige updates, sterke wachtwoorden en security plugins. Ook bieden we onderhoudscontracten aan voor continue monitoring.
                            </p>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-semibold mb-3 text-[#4F8BD2]">
                                Kan ik zelf mijn website beheren?
                            </h3>
                            <p className="text-gray-700">
                                Ja, WordPress is bekend om zijn gebruiksvriendelijke interface. We leveren uw website op met een intuïtief dashboard en geven training in het beheren van content. Voor complexere aanpassingen kunt u altijd op onze ondersteuning rekenen.
                            </p>
                        </div>

                        {/* FAQ Item 4 */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-semibold mb-3 text-[#4F8BD2]">
                                Hoe lang duurt het ontwikkelen van een WordPress website?
                            </h3>
                            <p className="text-gray-700">
                                De ontwikkeltijd varieert per project. Een eenvoudige website kan binnen 2-3 weken live zijn, terwijl een uitgebreide custom website 8-12 weken kan duren. We stellen aan het begin van elk project een realistische planning op.
                            </p>
                        </div>

                        {/* FAQ Item 5 */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-semibold mb-3 text-[#4F8BD2]">
                                Wat lever ik zelf aan?
                            </h3>
                            <p className="text-gray-700">
                                Foto&apos;s, tekst, links en andere content die u wilt plaatsen op uw website. Kortom de eigen branding.
                                Is deze er niet kunnen we die ook voor u maken.
                            </p>
                        </div>
                        {/* FAQ Item 8 */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-semibold mb-3 text-[#4F8BD2]">
                                Met welke pagebuilder werken jullie?
                            </h3>
                            <p className="text-gray-700">
                                Ik werk met Elementor. Elementor is een gebruiksvriendelijke pagebuilder die duidelijk en snel werkt.
                            </p>
                        </div>

                        {/* FAQ Item 6 */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-semibold mb-3 text-[#4F8BD2]">
                                Bouwen jullie ook webshops?
                            </h3>
                            <p className="text-gray-700">
                                Ja, maar hiervoor is een andere oplossing dan de standaard WordPress website. Wij werken onder andere met Shopify.
                            </p>
                        </div>
                          {/* FAQ Item 7 */}
                          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-semibold mb-3 text-[#4F8BD2]">
                                Kan ik ook hosting afnemen?
                            </h3>
                            <p className="text-gray-700">
                                Ja, we bieden hosting aan voor uw WordPress website. Dit is een extra optie binnen ons pakket.
                            </p>
                        </div>
                          
                    </div>

                 
                </section>

                
            </div>
        </div>
    );
};

export default WordPressPage;