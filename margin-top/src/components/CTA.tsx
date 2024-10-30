import React from 'react';

const CTA = () => {
    return (
        <div className="max-w-6xl mx-auto bg-white text-black p-8 text-center">
            <h2 className="text-3xl font-extrabold text-[#340066] mb-4">We helpen je met je websiteprobleem...</h2>
            <p className="mb-4 text-lg">Je faalt in het omzetten van dat verkeer naar leads. De ECHTE uitdaging is het omzetten van klikken naar conversies.</p>
            <div className="flex justify-around mt-10">
                <div className="flex flex-col items-center">
                    <img src="icon-2.png" alt="Verloren in de Concurrentie" className="w-12 h-12 mb-2" />
                    <h3 className="text-2xl mt-2 font-semibold text-[#340066">Veel Concurrentie</h3>
                    <p className="mb-4 mt-2">In een zee van concurrenten is het moeilijk om je merk te laten opvallen wanneer iedereen vecht om aandacht.</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="icon-1.png" alt="Leads die niet volgen" className="w-12 h-12 mb-2" />
                    <h3 className="text-2xl mt-2 font-semibold text-[#340066]">Leads die Niet Volgen</h3>
                            <p className="mb-4 mt-2">Heb je moeite om sitebezoekers om te zetten in leads? Je strategieën missen misschien je doelgroep.</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="icon-3.png" alt="Uitdagingen bij Klantconversie" className="w-12 h-12 mb-2" />
                    <h3 className="text-2xl mt-2 font-semibold text-[#340066]">Uitdagingen bij Klantconversie</h3>
                    <p className="mb-4 mt-2 ml-2">Klikken is pas het begin. De echte uitdaging ligt in het omzetten van die klikken naar loyale klanten.</p>
                </div>
            </div>
            <button className="mt-4 bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
                Aan de Slag
            </button>

            <div className="border-2 border-[#340066] p-4 rounded-lg mt-12">
                <h2 className="text-3xl font-extrabold text-[#340066] mb-4">De Oplossing:</h2>
                <h3 className="text-2xl font-semibold text-[#340066] mb-2">Conversiegerichte Ontwerpen</h3>
                <p className="mb-4">Ontwerpen die boeien, teksten die resoneren, en ontwikkeling die converteert. Geen oppervlakkige statistieken naar emotionele impact die browsers in kopers verandert.</p>
                
                <div className="flex justify-around mt-8">
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold text-[#340066]">Aansprekende Tekst</h3>
                        <p className="mb-4">Woorden creëren die betrokkenheid opwekken, aanspreken uiteindelijk je publiek overtuigen om actie te ondernemen.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold text-[#340066]">Top-Tier Branding</h3>
                        <p className="mb-4">Ontwerp een merkidentiteit die opvalt in een drukke markt.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold text-[#340066]">Conversiegericht Ontwerp</h3>
                        <p>Visueel aantrekkelijke ontwerpen creëren die zijn geoptimaliseerd voor maximale conversiepercentages.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default CTA;
