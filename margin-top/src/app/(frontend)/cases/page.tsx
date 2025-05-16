import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { Portfolio, Media } from '@/payload-types';

interface CaseGridItem {
  colSpan: number;
  rowSpan: number;
  titleSize: string;
  descriptionSize: string;
}

const getGridItemConfig = (index: number): CaseGridItem => {
  // Create an interesting modular pattern that repeats every 8 items
  switch (index % 8) {
    case 0: // Hero case - large rectangle
      return { 
        colSpan: 2, 
        rowSpan: 2, 
        titleSize: 'text-2xl sm:text-3xl', 
        descriptionSize: 'text-base sm:text-lg' 
      };
    case 1: // Tall rectangle
      return { 
        colSpan: 1, 
        rowSpan: 2, 
        titleSize: 'text-xl sm:text-2xl', 
        descriptionSize: 'text-sm sm:text-base' 
      };
    case 2: // Wide rectangle
      return { colSpan: 1, rowSpan: 1, titleSize: 'text-2xl', descriptionSize: 'text-base' };
    case 3: // Square
      return { colSpan: 1, rowSpan: 1, titleSize: 'text-xl', descriptionSize: 'text-base' };
    case 4: // Wide rectangle
      return { colSpan: 1, rowSpan: 1, titleSize: 'text-2xl', descriptionSize: 'text-base' };
    case 5: // Square
      return { colSpan: 1, rowSpan: 1, titleSize: 'text-xl', descriptionSize: 'text-base' };
    case 6: // Tall rectangle
      return { colSpan: 1, rowSpan: 2, titleSize: 'text-2xl', descriptionSize: 'text-base' };
    case 7: // Wide rectangle
      return { colSpan: 2, rowSpan: 1, titleSize: 'text-2xl', descriptionSize: 'text-base' };
    default:
      return { 
        colSpan: 1, 
        rowSpan: 1, 
        titleSize: 'text-lg sm:text-xl', 
        descriptionSize: 'text-sm sm:text-base' 
      };
  }
};

export default async function Cases() {
  const payloadConfig = await config;
  const payload = await getPayload({config: payloadConfig});
  
  const response = await (payload.find as any)({
    collection: 'portfolio',
    where: {
      status: {
        equals: 'published'
      }
    },
    sort: 'order',
    depth: 2,
    limit: 50
  });

  const cases = response.docs as Portfolio[];

  return (
    <div className="bg-white">
      <section className="w-11/12 max-w-5xl mx-auto py-12 sm:py-24">
        <div className="inline-block relative mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Cases 
          </h1>
          <hr className="absolute bottom-0 left-0 w-full border-gray-600 border-t-2" />
        </div>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mb-12 sm:mb-24">
          Met trots werken we aan projecten van onze klanten! We helpen graag merken te laten groeien door slimme, digitale oplossingen
        </p>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] sm:auto-rows-[200px] gap-4">
          {cases.map((caseItem: Portfolio, index: number) => {
            const gridConfig = getGridItemConfig(index);
            let imageUrl = '/placeholder-case.jpg';

            if (caseItem.image && typeof caseItem.image === 'object') {
              const mediaImage = caseItem.image as Media;
              if (mediaImage.url) {
                imageUrl = mediaImage.url;
              }
            }
            
            const itemClasses = `
              group 
              relative
              overflow-hidden
              rounded-lg
              transition-all
              duration-300
              transform
              hover:scale-[1.02]
              hover:shadow-xl
              ${gridConfig.colSpan === 2 ? 'sm:col-span-2' : 'col-span-1'}
              ${gridConfig.rowSpan === 2 ? 'row-span-2' : 'row-span-1'}
            `;
            
            return (
              <Link 
                href={`/cases/${caseItem.slug}`}
                key={index} 
                className={itemClasses}
              >
                <div className="h-full rounded-lg overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image 
                      src={imageUrl}
                      alt={caseItem.title || 'Case study'} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105" 
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <h3 className={`mb-2 ${gridConfig.titleSize} !text-white`}>
                          {caseItem.title}
                        </h3>
                        <p className={`text-white/90 line-clamp-2 sm:line-clamp-3 mb-2 ${gridConfig.descriptionSize}`}>
                          {caseItem.introduction}
                        </p>
                        {caseItem.services && (
                          <div className="hidden sm:flex flex-wrap gap-1.5 mb-2">
                            {Array.isArray(caseItem.services) ? (
                              caseItem.services.map((service: { service: string }, idx: number) => (
                                <span key={idx} className="text-white/80 text-xs bg-white/10 px-2 py-0.5">
                                  {service.service}
                                </span>
                              ))
                            ) : (
                              <span className="text-white/80 text-xs bg-white/10 px-2 py-0.5">
                                {caseItem.services}
                              </span>
                            )}
                          </div>
                        )}
                        <span className="text-white text-sm font-medium group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1">
                          Lees meer <FaArrowRight className="inline" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })} 
        </div>
      </section>
    </div>
  );
}
  