import React from 'react';
import Image from 'next/image';

export default function BrandingPage() {
  return (
    <div className="bg-white">
      <section className="w-11/12 max-w-5xl mx-auto py-24">
        <div className="inline-block mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Design
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mb-24">
          Branding, copy en visual design — allemaal onder één hoed.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Branding</h2>
            <p className="text-gray-600 mb-8">
              Een sterke merkidentiteit is de basis van elk succesvol bedrijf. We helpen je bij het ontwikkelen van een unieke en herkenbare brand die past bij jouw visie en doelgroep.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li>• Logo design</li>
              <li>• Brand guidelines</li>
              <li>• Visuele identiteit</li>
              <li>• Brand strategie</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Copy & Content</h2>
            <p className="text-gray-600 mb-8">
              Goede copy is essentieel voor het overbrengen van je boodschap. We schrijven teksten die je doelgroep aanspreken en je merk versterken.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li>• Website teksten</li>
              <li>• Product beschrijvingen</li>
              <li>• Social media content</li>
              <li>• Blog artikelen</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Visual Design</h2>
            <p className="text-gray-600 mb-8">
              Visueel design dat niet alleen mooi is, maar ook functioneel. We creëren designs die je merk versterken en je doelgroep aanspreken.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li>• Website design</li>
              <li>• Social media posts</li>
              <li>• Print materiaal</li>
              <li>• UI/UX design</li>
            </ul>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/design-service.jpg"
              alt="Design service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}           
