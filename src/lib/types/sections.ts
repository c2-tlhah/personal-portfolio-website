import {
  CTAType,
  ExperienceType,
  FeaturedProjectType,
  NavLinkType,
  ProjectType,
  SkillType,
  SocialLinkType,
} from '.';

export interface Section {
  title: string;
}

export interface HeroSection {
  title: string[];
}

export interface NavbarSectionType {
  navLinks: NavLinkType[];
  cta: CTAType;
}

export interface HeroSectionType extends HeroSection {
  subtitle?: string;
  tagline: string;
  description?: string;
  specialText?: string;
  cta?: CTAType & {
    hideInDesktop?: boolean;
  };
}

export interface AboutSectionType extends Section {
  list: {
    title: string;
    items: string[];
  };
  img: string;
  paragraphs: string[];
}

type SkillsType = {
  id: string;
  title: string;
  lottie: {
    light: string;
    dark: string;
  };
  points: string[];
  projectSkills: SkillType[];
};

export interface SkillsSectionType extends Section {
  skills: SkillsType[];
}

export interface ExperienceSectionType extends Section {
  experiences: ExperienceType[];
}

export interface ProjectsSectionType extends Section {
  projects: ProjectType[];
}

export interface FeaturedProjectsSectionType extends Section {
  projects: FeaturedProjectType[];
}

export interface ContactSectionType extends Section {
  subtitle?: string;
  paragraphs: string[];
  link: string;
}

export interface SocialSectionType {
  socialLinks: SocialLinkType[];
}

export interface FooterSectionType extends Section {
  link: string;
}
