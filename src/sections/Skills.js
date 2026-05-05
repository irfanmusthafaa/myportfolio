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
      <section className="container mx-auto  pt-16 text-center sm:mt-10">
        <HeadingAnimate>
          <h2 className="mb-5 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Specialized Skills
          </h2>
        </HeadingAnimate>

        {/* Frontend Development */}
        <LoadAnimate amount={0}>
          <div className="container mx-auto mt-12 mb-24 flex flex-col items-center gap-12 px-4 md:flex-row md:items-start lg:gap-20">
            {/* Animation Side */}
            <div className="w-full max-w-sm md:w-1/3 lg:max-w-md">
              <AnimatedLottie animationDataFile={codingAnimationData} />
            </div>

            {/* Skills Grid Side */}
            <div className="w-full flex-1 md:w-2/3">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {FRONTEND_SKILLS.map(({ label, icon, iconClasses }, i) => (
                  <TechSkillIcon
                    key={`frontend-skill-${i}`}
                    icon={icon}
                    iconClasses={iconClasses}
                    label={label}
                  />
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
