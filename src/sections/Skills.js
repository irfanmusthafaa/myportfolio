import React from 'react';
// components
import AnimatedLottie from '../components/Lottie';
import TechSkillIcon from '../components/skills/TechIcon';
import ListItem from '../components/skills/ListItem';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { FRONTEND_DESCRIPTIONS, FRONTEND_SKILLS } from '../mock/tech-skills';
import codingAnimationData from '../mock/lottie/coding.json';

// ----------------------------------------------------------------------

export default function Skills() {
  return (
    <>
      <section id="skills" className="mx-auto max-w-[90%] px-6 py-20 text-center sm:mt-10">
        <div className="mb-10 flex flex-col items-center space-y-4 text-center">
          <HeadingAnimate>
            <h2 className="mb-5 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
              Specialized Skills
            </h2>
          </HeadingAnimate>
          {/* <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            An overview of the technologies, frameworks, and tools I specialize in to craft high-quality web
            applications.
          </p> */}
        </div>

        {/* Frontend Development */}
        <LoadAnimate amount={0}>
          <div className="mt-8 flex flex-col items-center gap-10 md:flex-row md:items-start lg:gap-16">
            {/* Animation Side */}
            <div className="mb-10 flex justify-center md:mb-0 md:w-5/12">
              <div className="w-full max-w-sm lg:max-w-md">
                <AnimatedLottie animationDataFile={codingAnimationData} />
              </div>
            </div>

            {/* Skills Content Side */}
            <div className="flex w-full flex-col items-center text-center md:w-7/12 md:items-start md:text-left">
              <div className="my-3 flex flex-wrap items-center justify-center gap-2.5 text-center sm:gap-3 md:justify-start">
                {FRONTEND_SKILLS.map(({ label, icon, iconClasses }, i) => (
                  <TechSkillIcon
                    key={`frontend-skill-${i}`}
                    popoverId={`frontend-skill-${i}`}
                    icon={icon}
                    iconClasses={iconClasses}
                    label={label}
                  />
                ))}
              </div>
              {/* Description Part  */}
              <div className="mt-7 w-full space-y-4">
                {FRONTEND_DESCRIPTIONS.map((paragraph, i) => (
                  <ListItem key={`frontend-des-${i}`} paragraph={paragraph} />
                ))}
              </div>
            </div>
          </div>
        </LoadAnimate>

        {/* Quote Section  */}
      </section>
      {/* <div id="works" /> */}
    </>
  );
}
