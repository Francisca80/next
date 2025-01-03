'use client';
import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { MdAppShortcut } from "react-icons/md";
import { HiOutlineCursorClick } from "react-icons/hi";
import * as gtag from '@/lib/gtag';

const CTA = () => {
    const handleCTAClick = (ctaType: string) => {
        gtag.event({
            action: 'cta_click',
            category: 'conversion',
            label: ctaType,
        });
    };

    return (
        <div className="bg-black text-white p-16 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-extrabold text-[#6EC1E4] mb-4">We helpen je met je websites en apps</h2>
                <p className="mb-4 text-lg text-white">Je faalt in het omzetten van dat verkeer naar leads. De ECHTE uitdaging is het omzetten van klikken naar conversies.</p>
                <div className="flex justify-around mt-10">
                    {/* Websites Section */}
                    <div className="flex flex-col items-center">
                        <div className="mb-2 text-white">
                            <CgWebsite size={40} />
                        </div>
                        <h3 className="text-2xl mt-2 font-semibold text-white">Websites</h3>
                        <p className="mb-4 mt-2 text-white">In een zee van concurrenten is het moeilijk om je merk te laten opvallen wanneer 
                            iedereen vecht om aandacht. </p>
                    </div>
                    {/* Apps Section */}
                    <div className="flex flex-col items-center">
                        <div className="mb-2 text-white">
                            <MdAppShortcut size={40} />
                        </div>
                        <h3 className="text-2xl mt-2 font-semibold text-white">Apps</h3>
                        <p className="mb-4 mt-2 text-white">Heb je een idee voor een app? Native of Hybrid, Margin-Top helpt je om je app te maken.</p>
                    </div>
                    {/* Consultancy Section */}
                    <div className="flex flex-col items-center">
                        <div className="mb-2 text-white">
                            <HiOutlineCursorClick size={40} />
                        </div>
                        <h3 className="text-2xl mt-2 font-semibold text-white">Consultancy</h3>
                        <p className="mb-4 mt-2 text-white">Margin-Top ondersteunt je team met UX, UI en Development uitdagingen.</p>
                    </div>
                </div>
             
                {/* Solutions Section */}
                <div className="mt-12 p-16 border-2 text-[#6EC1E4] rounded-lg">
                    <h2 className="text-3xl font-extrabold text-[#6EC1E4] mb-4">Onze Oplossingen:</h2>
                    <div className="flex justify-around mt-8">
                        {/* Custom Websites and Apps */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-white">Websites op maat</h3>
                            <p className="mb-4 text-white">Websites die passen bij jouw behoefte, van een eenvoudige landingspagina tot een complexe webshop.</p>
                        </div>
                        {/* Top-Tier Branding */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-white">Apps hybrid & native</h3>
                            <p className="mb-4 text-white">Breng je app tot leven met onze expertise in native en hybrid apps. Voor IOS, Android of beide. Webapps zijn ook mogelijk.</p>
                        </div>
                        {/* Conversion-Oriented Design */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-white">Versterk je team</h3>
                            <p className="mb-4 text-white">Margin-Top helpt je team met UX, UI en Development uitdagingen. Met meer dan 25 jaar ervaring. zijn we experts in ons vak.</p>
                        </div>
                    </div>
                </div>
                {/* Call to Action Button */}
                <button className="mt-8 font-bold py-3 px-6 w-1/2 rounded-lg hover:bg-purple-700 transition duration-300" onClick={() => handleCTAClick('Aan de Slag')}>
                    Aan de Slag
                </button>
            </div>
        </div>
    );
};

export default CTA;
