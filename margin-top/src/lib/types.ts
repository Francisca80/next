export interface ICaseData {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
    about: string;
    services: string;
    caseScreens: string;
    backgroundImage: string;
    headingProject: string;
    procesImage: string;
    procesImageCaption: string;
    descriptionProject: string;
    procesDescription: string;
    resultText: string;
    resultImage: string;
    resultImageCaption: string;
    resultImage2: string;
    resultImageCaption2: string;
    usedTechniques: string;
}

export interface GtagEventParams {
    event_category?: string;
    event_label?: string;
    value?: number;
    page_path?: string;
    page_title?: string;
    page_location?: string;
    send_to?: string;
    [key: string]: string | number | undefined;
}

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (
            command: 'consent' | 'event' | 'js',
            targetId: string,
            params?: GtagEventParams
        ) => void;
    }
}

