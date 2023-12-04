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
      <section className="container mx-auto mt-16 pt-16 text-center sm:mt-10">
        <HeadingAnimate>
          <h2 className="mb-5 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Experiences
          </h2>
        </HeadingAnimate>

        {/* Frontend Development */}
        <LoadAnimate amount={0}>
          <div className="container my-5 flex w-full flex-col items-center p-5 ">
            <div className="flex w-full flex-col  ">
              <div className="mt-7 w-full space-y-5">
                {/* <ListExperience /> */}
                {DATA_EXPERIENCE.map((listExperience, i) => (
                  <ListExperience key={`frontend-des-${i}`} data={listExperience} />
                ))}
              </div>
            </div>
          </div>
        </LoadAnimate>
      </section>
      <div id="works" />
    </>
  );
};
