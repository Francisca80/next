import React from 'react';
import Image from 'next/image';
import { FaCode, FaServer, FaDatabase, FaMobile, FaCloud } from 'react-icons/fa';

const DevelopmentPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Main Content */}
            <div className="w-11/12 max-w-5xl mx-auto py-24 mt-24">
                {/* Introduction Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Development</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
                        Development is het hart van digitale innovatie. Het is het proces waarbij we ideeën omzetten in werkende, gebruiksvriendelijke digitale oplossingen. Of het nu gaat om een website, app of complex systeem: goede development zorgt ervoor dat alles soepel werkt en er professioneel uitziet.

                        Bij Margin-Top combineren we technische expertise met creativiteit om digitale oplossingen te bouwen die niet alleen functioneel zijn, maar ook een indruk maken. We gebruiken de nieuwste technologieën en best practices om ervoor te zorgen dat jouw digitale product snel, veilig en schaalbaar is.

                        Van front-end tot back-end, van mobiel tot web: wij zorgen ervoor dat jouw digitale oplossing perfect werkt op alle platforms en apparaten.
                    </p>
                </section>

                {/* Process Section */}
                <section className="mb-24">
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Hoe wordt Development toegepast?</h2>
                            <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                            <p className="text-xl text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
                                Development is een complex proces dat bestaat uit verschillende onderdelen. 
                                Het begint met het analyseren van de behoeften en het opstellen van een technisch plan. 
                                Daarna volgen het ontwerpen van de architectuur, het schrijven van code, het testen en het implementeren.

                                Een goede development-aanpak zorgt ervoor dat de code niet alleen werkt, maar ook onderhoudbaar en schaalbaar is. 
                                We gebruiken moderne frameworks en tools om efficiënt te werken en ervoor te zorgen dat het eindresultaat voldoet aan alle technische standaarden.

                                Het ontwikkelproces is iteratief: we bouwen stap voor stap, testen continu en passen aan waar nodig. 
                                Dit zorgt ervoor dat we snel kunnen inspelen op feedback en veranderende behoeften.
                            </p>
                        </div>
                        <div className="md:w-1/3 sticky top-8">
                            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/development/devprocescolor.jpg"
                                    alt="Development Process"
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Onze aanpak voor Development</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        Het development-proces van Margin-Top is ontworpen om robuuste, schaalbare en gebruiksvriendelijke digitale oplossingen te creëren die perfect aansluiten bij jouw zakelijke doelen.
                    </p>

                    <div className="space-y-8">
                        {/* Front-end Development */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaCode className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 01</span>
                                    <h3 className="text-xl font-bold">Front-end Development</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>HTML/CSS:</strong> Semantische markup en responsieve styling.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>JavaScript:</strong> Interactieve functionaliteit en animaties.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Frameworks:</strong> React, Next.js en andere moderne tools.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Back-end Development */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaServer className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 02</span>
                                    <h3 className="text-xl font-bold">Back-end Development</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>API's:</strong> RESTful en GraphQL endpoints.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Servers:</strong> Node.js, Python en andere backend technologieën.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Security:</strong> Authenticatie en autorisatie.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Database & Storage */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaDatabase className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 03</span>
                                    <h3 className="text-xl font-bold">Database & Storage</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Databases:</strong> SQL en NoSQL oplossingen.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Data modeling:</strong> Efficiënte data structuren.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Backups:</strong> Automatische backups en recovery.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Mobile Development */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaMobile className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 04</span>
                                    <h3 className="text-xl font-bold">Mobile Development</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Native apps:</strong> iOS en Android ontwikkeling.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>Cross-platform:</strong> React Native en Flutter.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>PWA's:</strong> Progressive Web Applications.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Cloud & DevOps */}
                        <div className="group border-b border-gray-200 pb-8">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                                    <FaCloud className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-[#4F8BD2] text-xs font-semibold tracking-wider uppercase">Fase 05</span>
                                    <h3 className="text-xl font-bold">Cloud & DevOps</h3>
                                </div>
                            </div>

                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                                    <span className="pt-1"><strong>Cloud platforms:</strong> AWS, Azure en Google Cloud.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                                    <span className="pt-1"><strong>CI/CD:</strong> Automatische deployment en testing.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                                    <span className="pt-1"><strong>Monitoring:</strong> Performance en error tracking.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DevelopmentPage; 