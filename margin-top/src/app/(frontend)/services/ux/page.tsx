import React from 'react';
import Image from 'next/image';
import { FaSearch, FaSitemap, FaPencilRuler, FaCode, FaChartLine } from 'react-icons/fa';

const UXPage: React.FC = () => {
    return (
        <div className="max-w-full">
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(/ux/uxproces.jpg)` }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center !text-white px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 !text-white underline" style={{ textDecorationColor: '#4F8BD2' }}>
           UX Design
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl !text-white">
              Gebruiksvriendelijke en waardevolle oplossingen in digitale producten

              UX Design, UI Design, Wireframing & Prototyping, Digitale toegankelijkheid, Design Systems
            </p>
          </div>
        </section>
    <div className="py-24 bg-blue-50">
    <section className="max-w-6xl mx-auto text-left !text-white mt-12 mb-12 p-4">
    <h2 className="text-4xl font-bold mb-8 text-left">UX Design</h2>
    <p className="text-xl text-left text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
      UX design, oftewel User Experience design, draait om het ontwerpen van gebruiksvriendelijke en waardevolle ervaringen voor jouw klanten. Het gaat verder dan alleen hoe iets eruitziet: het richt zich op hoe iets werkt en aanvoelt. Of het nu gaat om een website, app of andere digitale oplossing, een goede UX zorgt ervoor dat jouw klanten makkelijk en met plezier hun doel bereiken.

<br></br><br></br>Bij Margin-Top combineren we jarenlange ervaring met creativiteit en technologie om digitale ervaringen te ontwerpen die niet alleen mooi zijn, maar ook effectief. Wij helpen jouw merk om online te groeien door te focussen op wat jouw klanten nodig hebben. Van strategisch advies en wireframes tot een naadloze live-ervaring: wij staan aan jouw zijde.

Samen maken we jouw digitale product intuïtief, aantrekkelijk en succesvol.</p>
    </section>
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 mt-12 mb-12 p-4">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-8 text-left">Hoe wordt UX Design toegepast?</h2>
            <p className="text-xl text-left text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
              UX Design is een proces dat bestaat uit verschillende stappen. 
              Het begint met het begrijpen van de behoeften en doelen van de gebruiker. Dit is uiteindelijk degene die het product gaat gebruiken. 
              Daarna volgen onderzoek, ontwerpen, testen en implementatie. Alles met de focus op de gebruiker, om deze te informeren en motiveren om het product te gebruiken.
              <br></br><br></br>
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
        </section>
        <section className="max-w-6xl mx-auto text-left mt-8 md:mt-12 mb-8 md:mb-12 p-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-left text-[#340066]">
                Onze aanpak voor UX Design
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12">
                Het UX-proces van Margin-Top is ontworpen om gebruiksvriendelijke, effectieve en aantrekkelijke digitale ervaringen te creëren die perfect aansluiten bij de behoeften van jouw klanten en jouw zakelijke doelen.
            </p>

            <div className="grid gap-6 md:gap-12">
                {/* Section 1: Research & Strategy */}
                <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                    
                    <div className="flex items-center mb-4 md:mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                            <FaSearch className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Fase 01</span>
                            <h3 className="text-xl md:text-2xl font-bold">Onderzoek & Strategie</h3>
                        </div>
                    </div>

                    <ul className="space-y-3 md:space-y-4 text-gray-700 relative z-10">
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                            <span className="pt-1"><strong>Stakeholdergesprekken:</strong> Om jouw visie, uitdagingen en wensen te begrijpen.</span>
                        </li>
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                            <span className="pt-1"><strong>Gebruikersonderzoek:</strong> Interviews, persona's en data-analyse.</span>
                        </li>
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                            <span className="pt-1"><strong>Concurrentieanalyse:</strong> Inzicht krijgen in kansen.</span>
                        </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t border-[#4F8BD2]/10 relative z-10">
                        <p className="flex items-center text-[#4F8BD2] font-semibold">
                            <span className="w-2 h-2 bg-[#4F8BD2] rounded-full mr-2"></span>
                            Resultaat: Een duidelijke UX-strategie en prioriteiten
                        </p>
                    </div>
                </div>

                {/* Section 2: Concept & Structure */}
                <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                    
                    <div className="flex items-center mb-4 md:mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                            <FaSitemap className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Fase 02</span>
                            <h3 className="text-xl md:text-2xl font-bold">Concept & Structuur</h3>
                        </div>
                    </div>

                    <ul className="space-y-3 md:space-y-4 text-gray-700 relative z-10">
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                            <span className="pt-1"><strong>Wireframes:</strong> Visuele blauwdrukken van de interface.</span>
                        </li>
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                            <span className="pt-1"><strong>User flows:</strong> De routes die gebruikers nemen om hun doelen te bereiken.</span>
                        </li>
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                            <span className="pt-1"><strong>Informatiestructuur:</strong> Een overzichtelijke en intuïtieve organisatie van content.</span>
                        </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t border-[#4F8BD2]/10 relative z-10">
                        <p className="flex items-center text-[#4F8BD2] font-semibold">
                            <span className="w-2 h-2 bg-[#4F8BD2] rounded-full mr-2"></span>
                            Resultaat: Een helder concept dat de fundering legt voor het ontwerp
                        </p>
                    </div>
                </div>

                {/* Section 3: Design & Prototyping */}
                <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                    
                    <div className="flex items-center mb-4 md:mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                            <FaPencilRuler className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Fase 03</span>
                            <h3 className="text-xl md:text-2xl font-bold">Design & Prototyping</h3>
                        </div>
                    </div>

                    <ul className="space-y-3 md:space-y-4 text-gray-700 relative z-10">
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                            <span className="pt-1"><strong>Visueel ontwerp:</strong> Kleurgebruik, typografie en branding om een unieke identiteit te creëren.</span>
                        </li>
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                            <span className="pt-1"><strong>Interactieve prototypes:</strong> Klikbare modellen om de ervaring te testen en verfijnen.</span>
                        </li>
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                            <span className="pt-1"><strong>Feedbackrondes:</strong> Samen met jou zorgen we ervoor dat het ontwerp aansluit bij jouw visie.</span>
                        </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t border-[#4F8BD2]/10 relative z-10">
                        <p className="flex items-center text-[#4F8BD2] font-semibold">
                            <span className="w-2 h-2 bg-[#4F8BD2] rounded-full mr-2"></span>
                            Resultaat: Een visueel en interactief ontwerp dat klaar is voor ontwikkeling
                        </p>
                    </div>
                </div>

                {/* Section 4: Development & Implementation */}
                <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                    
                    <div className="flex items-center mb-4 md:mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                            <FaCode className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Fase 04</span>
                            <h3 className="text-xl md:text-2xl font-bold">Ontwikkeling & Implementatie</h3>
                        </div>
                    </div>

                    <ul className="space-y-3 md:space-y-4 text-gray-700 relative z-10">
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                            <span className="pt-1"><strong>Front-end development:</strong> Pixel-perfecte implementatie van het ontwerp.</span>
                        </li>
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                            <span className="pt-1"><strong>Back-end development:</strong> Server-side logic en database-interactie.</span>
                        </li>
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                            <span className="pt-1"><strong>Integratie:</strong> De digitale oplossing integreren in het bestaande systeem.</span>
                        </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t border-[#4F8BD2]/10 relative z-10">
                        <p className="flex items-center text-[#4F8BD2] font-semibold">
                            <span className="w-2 h-2 bg-[#4F8BD2] rounded-full mr-2"></span>
                            Resultaat: Een volledige digitale oplossing die klaar is voor implementatie
                        </p>
                    </div>
                </div>

                {/* Section 5: Testing & Optimization */}
                <div className="group bg-gradient-to-br from-white to-[#4F8BD2]/5 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8BD2]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                    
                    <div className="flex items-center mb-4 md:mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4F8BD2] !text-white mr-4">
                            <FaChartLine className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-[#4F8BD2] text-sm font-semibold tracking-wider uppercase">Fase 05</span>
                            <h3 className="text-xl md:text-2xl font-bold">Testen & Optimaliseren</h3>
                        </div>
                    </div>

                    <ul className="space-y-3 md:space-y-4 text-gray-700 relative z-10">
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">1</span>
                            <span className="pt-1"><strong>Usability testing:</strong> Het testen van de ervaringen met echte gebruikers.</span>
                        </li>
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">2</span>
                            <span className="pt-1"><strong>A/B testing:</strong> Het vergelijken van verschillende versies van een product.</span>
                        </li>
                        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-200">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#4F8BD2]/10 text-[#4F8BD2] mr-3">3</span>
                            <span className="pt-1"><strong>Analytics:</strong> Het analyseren van gebruikersgedrag en feedback.</span>
                        </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t border-[#4F8BD2]/10 relative z-10">
                        <p className="flex items-center text-[#4F8BD2] font-semibold">
                            <span className="w-2 h-2 bg-[#4F8BD2] rounded-full mr-2"></span>
                            Resultaat: Een verbeterde ervaring die voldoet aan de behoeften van jouw klanten
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
    );
};

export default UXPage;