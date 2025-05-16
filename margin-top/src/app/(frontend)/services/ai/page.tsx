import { getPayload } from 'payload'
import config from '@/payload.config'
import ServiceFaqSection from '@/components/ServiceFaqSection'
import ServiceCTA from '@/components/ServiceCTA'
import MoreCases from '@/components/MoreCases'
import { Portfolio, Media } from '@/payload-types'
import Image from 'next/image'
interface AIContent {
    title: string;
    introduction: string;
    innovationTitle: string;
    innovationDescription: string;
    innovationImage: Media | string | null;
    innovationFeatures: Array<{
        title: string;
        description: string;
    }>;
    solutionsTitle: string;
    solutionsDescription: string;
    solutions: Array<{
        title: string;
        description: string;
    }>;
    faqTitle: string;
    faqDescription: string;
    faqs: Array<{
        question: string;
        answer: string;
    }>;
}

export default async function AIPage() {
    const payload = await getPayload({ config })
    const { docs: aiContent } = await payload.find({
        collection: 'ai',
        where: {
            status: {
                equals: 'published'
            }
        }
    })

    const content = aiContent[0] as unknown as AIContent

    // Fetch portfolio cases for the MoreCases component
    const portfolioResponse = await payload.find({
        collection: 'portfolio',
        where: {
            status: {
                equals: 'published'
            }
        }
    });

    const portfolioCases = portfolioResponse.docs as Portfolio[];

    const getImageUrl = (image: Media | string | null): string => {
        if (!image) return '/ai/ai-banner.jpg';
        return typeof image === 'string' ? image : image.url || '/ai/ai-banner.jpg';
    };

    return (
        <div className="bg-white">
            <div className="w-11/12 max-w-5xl mx-auto py-12 md:py-16 mt-4 md:mt-8">
                {/* Introduction Section */}
                <section className="mb-8 md:mb-12">
                    <div className="inline-block">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">{content.title}</h2>
                        <hr className="border-gray-600 mb-4 w-full" />
                    </div>
                    <p className="text-xl text-gray-700 mb-6 md:mb-8 whitespace-pre-line leading-relaxed">
                        {content.introduction}
                    </p>
                </section>

                {/* Innovation Section */}
                <section className="mb-8 md:mb-12">
                    <div className="inline-block">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">{content.innovationTitle}</h2>
                        <hr className="border-gray-600 mb-4 w-full" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="md:w-1/2">
                            <p className="text-xl text-gray-700">
                                {content.innovationDescription}
                            </p>
                        </div>
                        
                        {content.innovationImage && (
                            <div className="md:w-1/2">
                                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={getImageUrl(content.innovationImage)}
                                        alt="Innovation Image"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 mt-12">
                        {(content.innovationFeatures || []).map((feature, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* AI Solutions Grid */}
                <section className="mb-24">
                    <div className="inline-block">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">{content.solutionsTitle}</h2>
                        <hr className="border-gray-600 mb-4 w-full" />
                    </div>
                    <p className="text-xl text-gray-700 mb-12">
                        {content.solutionsDescription}
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        {(content.solutions || []).map((solution, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                                <p className="text-gray-600">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <ServiceFaqSection 
                    title={content.faqTitle}
                    description={content.faqDescription}
                    faqs={content.faqs || []}
                />
                <section>
                    <MoreCases cases={portfolioCases} currentCaseId="" />
                </section>  
                {/* CTA Section */}
               
            </div>
            <section> 
                    <ServiceCTA 
                        serviceType="ai"
                        title="Klaar om AI te integreren in je project?"
                        subtitle="Laat ons je helpen met het implementeren van AI-oplossingen"
                    />
                </section>
        </div>
    )
}
