import React from "react";
import { FaRobot, FaBrain, FaChartLine, FaCogs, FaPalette, FaHandshake, FaLightbulb } from "react-icons/fa";

export default function AIPage() {
    return (
        <div className="bg-white">
            {/* Main Content */}
            <div className="w-11/12 max-w-5xl mx-auto py-24 mt-24">
                {/* Introduction Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">AI Development</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
                        Kunstmatige Intelligentie (AI) is niet meer weg te denken uit onze moderne wereld. Bij Margin-Top helpen we bedrijven om de kracht van AI te benutten en hun processen te optimaliseren. Of het nu gaat om het automatiseren van taken, het analyseren van data, of het verbeteren van klantinteracties - wij maken AI toegankelijk en praktisch toepasbaar voor uw organisatie.
                    </p>
                </section>

                {/* Innovation Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Innovatie bij Margin-Top</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        Bij Margin-Top staan we voorop in technologische innovatie. We combineren creativiteit met cutting-edge technologie om oplossingen te creëren die echt het verschil maken.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaLightbulb className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Innovatief Denken</h3>
                            </div>
                            <p className="text-gray-700">
                                We denken buiten de gebaande paden en zoeken constant naar nieuwe manieren om technologie in te zetten voor het oplossen van complexe uitdagingen. Onze innovatieve aanpak zorgt ervoor dat we altijd voorop lopen in technologische ontwikkelingen.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaBrain className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Technologische Expertise</h3>
                            </div>
                            <p className="text-gray-700">
                                Ons team beschikt over diepgaande kennis van de nieuwste AI-technologieën en ontwikkelmethoden. We blijven constant bij met de laatste ontwikkelingen en passen deze kennis direct toe in onze projecten.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AI Solutions Grid */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Onze AI Oplossingen</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        Ontdek hoe AI uw bedrijf kan transformeren met onze op maat gemaakte oplossingen.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Chatbots & Conversational AI */}
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaRobot className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Chatbots & Conversational AI</h3>
                            </div>
                            <p className="text-gray-700">
                                Intelligente chatbots die 24/7 klantvragen beantwoorden en uw support team ondersteunen. Onze conversational AI oplossingen zijn getraind op uw specifieke domein en kunnen complexe vragen beantwoorden.
                            </p>
                        </div>

                        {/* Predictive Analytics */}
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaChartLine className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Predictive Analytics</h3>
                            </div>
                            <p className="text-gray-700">
                                Gebruik AI om trends te voorspellen en data-gedreven beslissingen te nemen. Onze predictive analytics modellen helpen u bij het identificeren van kansen en het optimaliseren van bedrijfsprocessen.
                            </p>
                        </div>

                        {/* Process Automation */}
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaCogs className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Process Automation</h3>
                            </div>
                            <p className="text-gray-700">
                                Automatiseer repetitieve taken met AI-gestuurde oplossingen. Van document verwerking tot data extractie, wij maken uw workflows efficiënter en foutlozer.
                            </p>
                        </div>

                        {/* AI Design */}
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaPalette className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">AI Design</h3>
                            </div>
                            <p className="text-gray-700">
                                Gebruik AI om uw designproces te versnellen en te verbeteren. Van het genereren van visuele concepten tot het optimaliseren van gebruikersinterfaces, AI helpt bij het creëren van innovatieve en effectieve designs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* AI Implementation Process */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Onze Aanpak</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        Een gestructureerde aanpak voor het implementeren van AI in uw organisatie.
                    </p>

                    <div className="space-y-8">
                        {/* Phase 1 */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaBrain className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 01</span>
                                    <h3 className="text-xl font-bold">Analyse & Strategie</h3>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                We beginnen met een grondige analyse van uw organisatie, processen en doelstellingen. Samen bepalen we waar AI de meeste waarde kan toevoegen en ontwikkelen we een concrete implementatiestrategie.
                            </p>
                        </div>

                        {/* Phase 2 */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaCogs className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 02</span>
                                    <h3 className="text-xl font-bold">Ontwikkeling & Training</h3>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                We ontwikkelen en trainen AI-modellen op basis van uw specifieke data en use cases. Dit omvat data preprocessing, model selectie, training en validatie om optimale resultaten te garanderen.
                            </p>
                        </div>

                        {/* Phase 3 */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaHandshake className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 03</span>
                                    <h3 className="text-xl font-bold">Implementatie & Integratie</h3>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                De AI-oplossing wordt naadloos geïntegreerd in uw bestaande systemen en workflows. We zorgen voor een soepele overgang en trainen uw team in het gebruik van de nieuwe technologie.
                            </p>
                        </div>

                        {/* Phase 4 */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaChartLine className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 04</span>
                                    <h3 className="text-xl font-bold">Monitoring & Optimalisatie</h3>
                                </div>
                            </div>
                            <p className="text-gray-700">
                                We monitoren de prestaties van de AI-oplossing en optimaliseren deze continu op basis van gebruikersfeedback en nieuwe data. Dit zorgt voor blijvende verbetering en maximale ROI.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Veelgestelde vragen</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        Antwoorden op de meest gestelde vragen over AI development.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* FAQ Items */}
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Wat zijn de voordelen van AI voor mijn bedrijf?
                            </h3>
                            <p className="text-gray-700">
                                AI kan uw bedrijf helpen met het automatiseren van taken, het verbeteren van besluitvorming, het verhogen van efficiëntie en het bieden van betere klantenservice. Het kan ook nieuwe inzichten genereren uit uw data en helpen bij het identificeren van kansen.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Hoe lang duurt het implementeren van AI?
                            </h3>
                            <p className="text-gray-700">
                                De implementatietijd varieert per project en hangt af van de complexiteit van de oplossing. Een eenvoudige chatbot kan binnen enkele weken live zijn, terwijl een complexe predictive analytics oplossing enkele maanden kan duren.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Heb ik veel data nodig voor AI?
                            </h3>
                            <p className="text-gray-700">
                                De hoeveelheid benodigde data hangt af van het type AI-oplossing. Voor sommige toepassingen is bestaande data voldoende, voor andere zijn grotere datasets nodig. We kunnen ook werken met pre-trained modellen en deze fine-tunen voor uw specifieke use case.
                            </p>
                        </div>

                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-[#4F8BD2]">
                                Is AI veilig en betrouwbaar?
                            </h3>
                            <p className="text-gray-700">
                                We implementeren robuuste beveiligingsmaatregelen en best practices voor AI-systemen. Dit omvat data privacy, model validatie, en continue monitoring. We zorgen ervoor dat de AI-oplossingen transparant en betrouwbaar zijn.
                            </p>
                        </div>
                </div>
            </section>
            </div>
        </div>
    );
}
