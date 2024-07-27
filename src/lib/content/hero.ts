import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hello, I’m',
    title: ['Muhammad Talha!', 'Big Data Engineer', 'Solutions Architect', 'Data Scientist'],
    tagline: 'I make ETL pipelines and Solutions Architecture.',
    description:
    "I’m a Computer Science & Artifical Intelligence student at FAST National University of Computer and Emerging Sciences, focused on Big Data Technologies Stack and Machine Learning. I enjoy learning new skills and building projects to gain hands on experince. I’m eager to grow and work well with others to turn ideas into reality.",
    specialText: 'Currently available for job opportunities and freelance projects.',
    cta: {
        title: 'View My Resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};
