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
      <section className="container mx-auto mt-24 px-4 pt-16">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <HeadingAnimate>
            <h2 className="font-lato text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Work Experience
            </h2>
          </HeadingAnimate>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A journey through my professional career and the impact I've made at each role.
          </p>
        </div>

        <LoadAnimate amount={0}>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-2">
              {DATA_EXPERIENCE.map((listExperience, i) => (
                <ListExperience key={`experience-${i}`} data={listExperience} />
              ))}
            </div>
          </div>
        </LoadAnimate>
      </section>
      <div id="works" />
    </>
  );
};
