import React from 'react';
// components
import AnimatedLottie from '../components/Lottie';
import ListItem from '../components/skills/ListItem';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { ListExperience } from '../components/experience/ListExperience';
import { DATA_EXPERIENCE } from '../mock/experience';

export const Experiences = () => {
  return (
    <>
      <section id="experience" className="container mx-auto max-w-[90%] px-5 py-24">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <HeadingAnimate>
            <h2 className="mb-5 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
              Work Experience
            </h2>
          </HeadingAnimate>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A journey through my professional career and the impact I've made at each role.
          </p>
        </div>

        <LoadAnimate amount={0}>
          <div className="mx-auto w-full">
            <div className="flex flex-col space-y-2">
              {DATA_EXPERIENCE.map((listExperience, i) => (
                <ListExperience key={`experience-${i}`} data={listExperience} />
              ))}
            </div>
          </div>
        </LoadAnimate>
      </section>
    </>
  );
};
