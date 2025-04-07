import { getPayload } from 'payload'
import config from '@/payload.config'
import ServiceFaqSection from '@/components/ServiceFaqSection'

interface AIContent {
    id: string
    title: string
    slug: string
    introduction: string
    innovationTitle: string
    innovationDescription: string
    innovationFeatures: {
        title: string
        description: string
    }[]
    solutionsTitle: string
    solutionsDescription: string
    solutions: {
        title: string
        description: string
    }[]
    faqTitle: string
    faqDescription: string
    faqs: {
        question: string
        answer: string
    }[]
    status: 'draft' | 'published'
    createdAt: string
    updatedAt: string
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

    return (
        <div className="bg-white">
            {/* Main Content */}
            <div className="w-11/12 max-w-5xl mx-auto py-24 mt-24">
                {/* Introduction Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">{content.title}</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-8 whitespace-pre-line leading-relaxed">
                        {content.introduction}
                    </p>
                </section>

                {/* Innovation Section */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">{content.innovationTitle}</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        {content.innovationDescription}
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        {(content.innovationFeatures || []).map((feature, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-700">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* AI Solutions Grid */}
                <section className="mb-24">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">{content.solutionsTitle}</h2>
                    <hr className="border-gray-600 mb-4 w-16 sm:w-20 md:w-24 ml-0" />
                    <p className="text-xl text-gray-700 mb-12">
                        {content.solutionsDescription}
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        {(content.solutions || []).map((solution, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                                <p className="text-gray-700">
                                    {solution.description}
                                </p>
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
            </div>
        </div>
    )
}
