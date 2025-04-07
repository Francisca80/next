import React from "react";
import { FaCogs, FaPalette, FaRocket } from "react-icons/fa";

export default function DevelopmentPage() {
    return (
        <div className="bg-white">
            {/* Main Content */}
            <div className="w-11/12 max-w-5xl mx-auto py-24 mt-24">
                {/* Introduction Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">WordPress Development</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
                        WordPress is uitgegroeid tot meer dan alleen een blogplatform - het is een volwaardig content management systeem dat de ruggengraat vormt van meer dan 40% van alle websites wereldwijd. Bij Margin-Top zetten we WordPress in als een krachtig instrument voor het bouwen van schaalbare, veilige en gebruiksvriendelijke websites.

                        Of u nu een bedrijfswebsite, webshop of custom applicatie nodig heeft, wij zorgen voor een oplossing die perfect aansluit bij uw wensen en doelstellingen.
                    </p>
                </section>

                {/* WordPress Options Grid */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">WordPress aanbod</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        Van basis websites tot complexe maatwerkoplossingen - ontdek wat WordPress voor uw organisatie kan betekenen.
                    </p>

                    <div className="space-y-8">
                        {/* OnePager Elementor */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaRocket className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Optie 01</span>
                                    <h3 className="text-xl font-bold">OnePager WordPress Website</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Snelle start:</strong> Binnen 2 weken online</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Alles-in-één:</strong> Alle belangrijke info op één pagina</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Mobiel-eerst:</strong> Perfect responsive design</span>
                                </li>
                            </ul>

                            <div className="mt-6 pt-6 border-t border-gray-200">
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

                        {/* Standard Elementor */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaPalette className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Optie 02</span>
                                    <h3 className="text-xl font-bold">Standaard WordPress Website</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Snelle ontwikkeling:</strong> Ideaal voor kleinere websites en budgetten</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Visuele editor:</strong> Eenvoudig zelf content aanpassen</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Responsive design:</strong> Perfect op alle apparaten</span>
                                </li>
                            </ul>

                            <div className="mt-6 pt-6 border-t border-gray-200">
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
                                    <p>✓ 5 pagina&apos;s (excl. salespagina&apos;s)</p>
                                    <p>✓ Compleet op maat gemaakt ontwerp</p>
                                    <p>✓ Contact formulier, bedanktpagina, 404-pagina, algemene voorwaarden & privacybeleid</p>
                                    <p>✓ Basis SEO-optimalisatie</p>
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <p className="font-semibold text-[#4F8BD2] mb-2">Uitbreidingsmogelijkheden:</p>
                                        <p>• Extra pagina: €135,- (excl. salespagina&apos;s)</p>
                                        <p>• Blog module: €350,-</p>
                                        <p>• Salespagina: vanaf €450,-</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Custom Development */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaCogs className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Optie 03</span>
                                    <h3 className="text-xl font-bold">Custom WordPress Website</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Custom Themes:</strong> Uniek ontwerp dat perfect past bij uw merk</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Plugins op Maat:</strong> Specifieke functionaliteit voor uw behoeften</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>API Integraties:</strong> Naadloze verbinding met externe systemen</span>
                                </li>
                            </ul>

                            <div className="mt-6 pt-6 border-t border-gray-200">
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
                    </div>
                </section>

                {/* Optional Extras Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Optionele Extra&apos;s</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        Extra diensten om uw WordPress website nog completer te maken.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">Hosting</h3>
                            <p className="text-gray-700 mb-4">Managed WordPress hosting</p>
                            <p className="text-2xl font-bold text-[#4F8BD2]">Vanaf €30,- /maand</p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">Hosting</h3>
                            <p className="text-gray-700 mb-4">Updates & security</p>
                            <p className="text-2xl font-bold text-[#4F8BD2]">Vanaf €75,- /maand</p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">SEO Package</h3>
                            <p className="text-gray-700 mb-4">Uitgebreide optimalisatie</p>
                            <p className="text-2xl font-bold text-[#4F8BD2]">Vanaf €750,-</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Veelgestelde vragen</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        Antwoorden op de meest gestelde vragen over WordPress development.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* FAQ Items */}
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Waarom zou ik voor WordPress kiezen?
                            </h3>
                            <p className="text-gray-700">
                                WordPress is het meest gebruikte CMS ter wereld, met een marktaandeel van meer dan 40%. Het biedt een perfecte balans tussen gebruiksgemak, flexibiliteit en schaalbaarheid. Daarnaast is er een enorme community die constant nieuwe functionaliteiten en plugins ontwikkelt.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Hoe zit het met de beveiliging van WordPress?
                            </h3>
                            <p className="text-gray-700">
                                WordPress is van zichzelf veilig, maar vereist wel regelmatig onderhoud. Wij zorgen voor een stevige beveiliging door het implementeren van SSL, regelmatige updates, sterke wachtwoorden en security plugins. Ook bieden we onderhoudscontracten aan voor continue monitoring.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Kan ik zelf mijn website beheren?
                            </h3>
                            <p className="text-gray-700">
                                Ja, WordPress is bekend om zijn gebruiksvriendelijke interface. We leveren uw website op met een intuïtief dashboard en geven training in het beheren van content. Voor complexere aanpassingen kunt u altijd op onze ondersteuning rekenen.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Hoe lang duurt het ontwikkelen van een WordPress website?
                            </h3>
                            <p className="text-gray-700">
                                De ontwikkeltijd varieert per project. Een eenvoudige website kan binnen 2-3 weken live zijn, terwijl een uitgebreide custom website 8-12 weken kan duren. We stellen aan het begin van elk project een realistische planning op.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Wat lever ik zelf aan?
                            </h3>
                            <p className="text-gray-700">
                                Foto&apos;s, tekst, links en andere content die u wilt plaatsen op uw website. Kortom de eigen branding. Is deze er niet kunnen we die ook voor u maken.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Met welke pagebuilder werken jullie?
                            </h3>
                            <p className="text-gray-700">
                                Ik werk met Elementor. Elementor is een gebruiksvriendelijke pagebuilder die duidelijk en snel werkt.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Bouwen jullie ook webshops?
                            </h3>
                            <p className="text-gray-700">
                                Ja, maar hiervoor is een andere oplossing dan de standaard WordPress website. Wij werken onder andere met Shopify.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Kan ik ook hosting afnemen?
                            </h3>
                            <p className="text-gray-700">
                                Ja, we bieden hosting aan voor uw WordPress website. Dit is een extra optie binnen ons pakket.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Price Notice */}
                <div className="text-sm text-gray-600 italic">
                    * Alle genoemde prijzen zijn exclusief BTW
                    <br />
                    * Exacte prijs afhankelijk van specifieke wensen en functionaliteiten
                    <br />
                    * De teksten, foto&apos;s en andere content/branding worden op tijd aangeleverd.
                </div>
            </div>
        </div>
    );
}


