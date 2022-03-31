export interface Slide {
    url: string;
    title: string;
    subtitle: string;
    alt: string;
    link: string;
    priority?: boolean;
}
export const slides: Slide[] = [
    {
        url: "/images/index/shift-1.jpg",
        alt: "",
        title: "Shift",
        subtitle: "Shift",
        link: "/projet/shift",
    },
    {
        url: "/images/index/tran-2.jpg",
        alt: "",
        title: "Transformer festival",
        subtitle: "Transformer festival",
        link: "/projet/transformer-festival",
    },
    {
        url: "/images/index/illumi-3.jpg",
        alt: "",
        title: "L'illuminerie",
        subtitle: "L'illuminerie",
        link: "/projet/illuminerie",
        priority: true,
    },
    {
        url: "/images/index/mami-4.jpg",
        alt: "",
        title: "Mamie boulette",
        subtitle: "Mamie boulette",
        link: "/projet/mamie-boulette",
    },
    {
        url: "/images/index/TN-7.jpg",
        alt: "",
        title: "Théâtre de Nîmes",
        subtitle: "Théâtre de Nîmes",
        link: "/projet/theatre-nimes",
    },
    {
        url: "/images/index/TLMD-8.jpg",
        alt: "",
        title: "Tout le monde dehors",
        subtitle: "Tout le monde dehors",
        link: "/projet/tlmd",
    },
    {
        url: "/images/index/cirva-6.jpg",
        alt: "",
        title: "CIRVA",
        subtitle: "CIRVA",
        link: "/projet/cirva",
    },
    {
        url: "/images/index/illu-5.jpg",
        alt: "",
        title: "Illustrations",
        subtitle: "Illustrations",
        link: "/projet/illustrations",
    },
];

export function navigateToPreviousProject(currentIndex: number): string {
    if (currentIndex-- <= 0) {
        return slides[slides.length - 1].link;
    }
    return slides[currentIndex++].link;
}

export function navigateToNextProject(currentIndex: number): string {
    if (currentIndex++ >= slides.length - 1) {
        return slides[0].link;
    }
    return slides[currentIndex++].link;
}
