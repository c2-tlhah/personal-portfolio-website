'use client';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, Wrapper } from '@/components';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HERO_TITLE_DELAY } from '@/lib/utils/config';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  const titleSequence = title.flatMap((str) => [str, HERO_TITLE_DELAY]);

  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-5 xs:mt-0"
    >
      <div className="max-w-5xl text-3xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
        <motion.p
          variants={slideUp({ delay: getAnimationDelay(0) })}
          initial="hidden"
          animate="show"
          className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-variant inline-block leading-[1.2]"
        >
          {subtitle}
        </motion.p>
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="text-slate-900 dark:text-slate-200 mb-2 leading-[1.1]"
        >
          <TypeAnimation
            sequence={titleSequence}
            speed={50}
            style={{
              color: 'inherit',
              fontWeight: 'bold',
              display: 'inline-block',
            }}
            repeat={Infinity}
          />
        </motion.h1>
      </div>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(3) })}
        initial="hidden"
        animate="show"
        className="max-w-3xl text-base md:text-lg"
        style={{ whiteSpace: 'pre-line' }}
      >
        {description}
      </motion.p>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(4) })}
        initial="hidden"
        animate="show"
        className="font-mono text-xs md:text-sm text-accent"
      >
        {specialText}
      </motion.p>

      {cta && (
        <Button
          size="lg"
          type="link"
          variants={slideUp({ delay: getAnimationDelay(5) })}
          initial="hidden"
          animate="show"
          href={cta?.url ?? '#'}
          className={`mt-5 xs:mt-8 md:mt-10 rounded-full ${
            cta.hideInDesktop ? 'md:hidden' : ''
          }`}
          sameTab={cta?.sameTab}
        >
          {cta.title}
        </Button>
      )}
    </Wrapper>
  );
};

export default Hero;
