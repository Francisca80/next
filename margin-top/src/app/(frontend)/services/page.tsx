import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Service } from '@/payload-types';

export default async function Services() {
  const payloadConfig = await config;
  const payload = await getPayload({config: payloadConfig});
  
  const response = await (payload.find as any)({
    collection: 'services',
    sort: 'order',
    depth: 2
  });

  const services = response.docs as Service[];

  // Fetch the services image from Payload
  const servicesImageResponse = await (payload.find as any)({
    collection: 'media',
    where: {
      filename: { equals: 'services.jpg' }
    }
  });

  const servicesImage = servicesImageResponse?.docs?.[0]?.url || '/images/services.jpg';

  return (
    <div className="bg-white">
      <section className="w-11/12 max-w-5xl mx-auto py-24">
        <div className="inline-block mb-16 mt-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Services 
          </h1>
          <hr className="border-gray-600 mb-4 border-t-2" />
        </div>

        <p className="text-xl text-gray-600 max-w-3xl mb-24">
          Met trots werken we aan projecten van onze klanten! We helpen graag merken te laten groeien door slimme, digitale oplossingen
        </p>

        {/* Services List Section */}
        <div className="space-y-16">
          {services.map((service) => {
            const imageUrl = typeof service.images === 'string' 
              ? service.images 
              : service.images?.url || '/services.jpg';
            
            return (
              <Link 
                href={`/services/${encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`} 
                key={service.id} 
                className="block group"
              >
                <div className="flex flex-col md:flex-row items-start gap-12">
                  <div className="relative w-full md:w-1/2 aspect-[4/3]">
                    <Image 
                      src={imageUrl}
                      alt={service.title} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg transition-transform duration-500 group-hover:scale-105" 
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-3xl mb-6">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="text-[#4F8BD2] font-medium group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2">
                      Lees meer <FaArrowRight className="inline" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })} 
        </div>
      </section>

      {/* How it works Section */}
      <div className="w-full bg-[#340066] py-12 my-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 relative h-[300px] w-full mb-8 md:mb-0">
              <Image
                src={servicesImage}
                alt="Contact us"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                loading="lazy"
                unoptimized
              />
            </div>
            <div className="md:w-1/2 md:pl-12 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold !text-white mb-4">
                Hoe werkt het?
              </h2>
              <p className="!text-white/90 mb-6">
                Om jouw website te maken, gaan we in een aantal stappen te werk. Ieder project is uniek, het proces kan daarom afwijken.
                De onderstaande stappen zijn een goed begin. <br/><br/>Jouw visie is belangrijk voor ons om een unieke website te maken. We bepalen samen wat de beste oplossing is.
                Neem contact op voor een vrijblijvend gesprek
              </p>
              <a href="mailto:francisca@margin-top.com?subject=Vraag over services">
                <button className="bg-[#4F8BD2] !text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#3A6BA3] transition">
                  Mail ons
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
