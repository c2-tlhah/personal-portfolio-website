import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
    title: 'get in touch',
    subtitle: "what's next",
    paragraphs: [
    'I’m currently looking for a remote job or any new opportunities.',
    'Looking to discuss a project or just say hi? Feel free to message me anytime!',
    ],
    link: `mailto:${author.email}`,
};