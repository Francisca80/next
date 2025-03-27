import React from 'react';
import Image from 'next/image';
import { FaSearch, FaSitemap, FaPencilRuler, FaCode, FaChartLine } from 'react-icons/fa';

const UXPage: React.FC = () => {
    return (
        <div className="bg-white">
         

            {/* Main Content */}
            <div className="w-11/12 max-w-5xl mx-auto py-24 mt-24">
                {/* Introduction Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">UX Design</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
                        UX design, oftewel User Experience design, draait om het ontwerpen van gebruiksvriendelijke en waardevolle ervaringen voor jouw klanten. Het gaat verder dan alleen hoe iets eruitziet: het richt zich op hoe iets werkt en aanvoelt. Of het nu gaat om een website, app of andere digitale oplossing, een goede UX zorgt ervoor dat jouw klanten makkelijk en met plezier hun doel bereiken.

                        Bij Margin-Top combineren we jarenlange ervaring met creativiteit en technologie om digitale ervaringen te ontwerpen die niet alleen mooi zijn, maar ook effectief. Wij helpen jouw merk om online te groeien door te focussen op wat jouw klanten nodig hebben. Van strategisch advies en wireframes tot een naadloze live-ervaring: wij staan aan jouw zijde.

                        Samen maken we jouw digitale product intuïtief, aantrekkelijk en succesvol.
                    </p>
                </section>

                {/* Process Section */}
                <section className="mb-24">
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Hoe wordt UX Design toegepast?</h2>
                            <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                            <p className="text-xl text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
                                UX Design is een proces dat bestaat uit verschillende stappen. 
                                Het begint met het begrijpen van de behoeften en doelen van de gebruiker. Dit is uiteindelijk degene die het product gaat gebruiken. 
                                Daarna volgen onderzoek, ontwerpen, testen en implementatie. Alles met de focus op de gebruiker, om deze te informeren en motiveren om het product te gebruiken.

                                Design speelt hierbij een belangrijke rol. Een product wat er mooi uitziet, is niet genoeg. 
                                Het moet ook functioneel zijn en de gebruiker moet het gemakkelijk kunnen gebruiken.
                                Het vertrekpunt voor een ontwerp is een gebruikersonderzoek. Dit onderzoek vormt de basis om te zien wie je gebruikers (doelgroep) zijn 
                                en hoe je deze kunt bereiken. Als we dit samenbrengen met de bedrijfsdoelen kunnen we de beste oplossing vinden. 
                                Het daadwerkelijke visuele (UI)ontwerp en ontwikkelproces volgen hierop.
                            </p>
                        </div>
                        <div className="md:w-1/3 sticky top-8">
                            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/ux/uxprocescolor.jpg"
                                    alt="UX Design Process"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Approach Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Onze aanpak voor UX Design</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        Het UX-proces van Margin-Top is ontworpen om gebruiksvriendelijke, effectieve en aantrekkelijke digitale ervaringen te creëren die perfect aansluiten bij de behoeften van jouw klanten en jouw zakelijke doelen.
                    </p>

                    <div className="space-y-8">
                        {/* Research & Strategy */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaSearch className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 01</span>
                                    <h3 className="text-xl font-bold">Onderzoek & Strategie</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Stakeholdergesprekken:</strong> Om jouw visie, uitdagingen en wensen te begrijpen.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Gebruikersonderzoek:</strong> Interviews, persona's en data-analyse.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Concurrentieanalyse:</strong> Inzicht krijgen in kansen.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Concept & Structure */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaSitemap className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 02</span>
                                    <h3 className="text-xl font-bold">Concept & Structuur</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Wireframes:</strong> Visuele blauwdrukken van de interface.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>User flows:</strong> De routes die gebruikers nemen om hun doelen te bereiken.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Informatiestructuur:</strong> Een overzichtelijke en intuïtieve organisatie van content.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Design & Prototyping */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaPencilRuler className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 03</span>
                                    <h3 className="text-xl font-bold">Design & Prototyping</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Visueel ontwerp:</strong> Kleurgebruik, typografie en branding om een unieke identiteit te creëren.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Interactieve prototypes:</strong> Klikbare modellen om de ervaring te testen en verfijnen.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Feedbackrondes:</strong> Samen met jou zorgen we ervoor dat het ontwerp aansluit bij jouw visie.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Development & Implementation */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaCode className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 04</span>
                                    <h3 className="text-xl font-bold">Ontwikkeling & Implementatie</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Front-end development:</strong> Pixel-perfecte implementatie van het ontwerp.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Back-end development:</strong> Server-side logic en database-interactie.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Integratie:</strong> De digitale oplossing integreren in het bestaande systeem.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Testing & Optimization */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaChartLine className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 05</span>
                                    <h3 className="text-xl font-bold">Testen & Optimaliseren</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Usability testing:</strong> Het testen van de ervaringen met echte gebruikers.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>A/B testing:</strong> Het vergelijken van verschillende versies van een product.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Analytics:</strong> Het analyseren van gebruikersgedrag en feedback.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UXPage;