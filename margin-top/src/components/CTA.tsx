import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { MdAppShortcut } from "react-icons/md";
import { HiOutlineCursorClick } from "react-icons/hi";

const CTA = () => {
    return (
        <div className="bg-black text-white p-16 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-extrabold text-[#6EC1E4] mb-4">We helpen je met je websites en apps</h2>
                <p className="mb-4 text-lg text-white">Je faalt in het omzetten van dat verkeer naar leads. De ECHTE uitdaging is het omzetten van klikken naar conversies.</p>
                <div className="flex justify-around mt-10">
                    <div className="flex flex-col items-center">
                        <div className="mb-2 text-white">
                            <CgWebsite size={40} />
                        </div>
                        <h3 className="text-2xl mt-2 font-semibold text-white">Websites</h3>
                        <p className="mb-4 mt-2 text-white">In een zee van concurrenten is het moeilijk om je merk te laten opvallen wanneer iedereen vecht om aandacht.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-2 text-white">
                            <MdAppShortcut size={40} />
                        </div>
                        <h3 className="text-2xl mt-2 font-semibold text-white">Apps</h3>
                        <p className="mb-4 mt-2 text-white">Heb je moeite om sitebezoekers om te zetten in leads? Je strategieën missen misschien je doelgroep.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="mb-2 text-white">
                            <HiOutlineCursorClick size={40} />
                        </div>
                        <h3 className="text-2xl mt-2 font-semibold text-white">Conversie</h3>
                        <p className="mb-4 mt-2 text-white">Klikken is pas het begin. De echte uitdaging ligt in het omzetten van die klikken naar loyale klanten.</p>
                    </div>
                </div>
             
                <div className="mt-12 p-16 border-2 text-[#6EC1E4] rounded-lg">
                    <h2 className="text-3xl font-extrabold text-[#6EC1E4] mb-4">Onze Oplossingen:</h2>
                  
                    <div className="flex justify-around mt-8">
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-white">Websites en Apps op maat</h3>
                            <p className="mb-4 text-white">Woorden creëren die betrokkenheid opwekken, aanspreken uiteindelijk je publiek overtuigen om actie te ondernemen.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-white">Top-Tier Branding</h3>
                            <p className="mb-4 text-white">Ontwerp een merkidentiteit die opvalt in een drukke markt.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-white">Conversiegericht Ontwerp</h3>
                            <p className="mb-4 text-white">Visueel aantrekkelijke ontwerpen creëren die zijn geoptimaliseerd voor maximale conversiepercentages.</p>
                        </div>
                        
                    </div>
                </div>
                <button className="mt-8 font-bold py-3 px-6 w-1/2 rounded-lg hover:bg-purple-700 transition duration-300">
                    Aan de Slag
                </button>
            </div>
        </div>
    );
};

export default CTA;
