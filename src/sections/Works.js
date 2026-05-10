import React from 'react';
// components
import ProjectCard from '../components/works/ProjectCard';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mocks
import { PROJECTS } from '../mock/projects';

// ----------------------------------------------------------------------

export default function Works() {
  return (
    <>
      <section className="container mx-auto mt-16  space-y-10 space-x-5 pt-16 pb-16 sm:pb-16 md:space-x-0">
        <HeadingAnimate >
          <h2 className="text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            Recent Works
          </h2>
        </HeadingAnimate>

        <LoadAnimate amount={0}>
          <div className="flex w-full flex-col items-center">
            <div className="mt-10 grid grid-cols-1 gap-5 gap-y-5 md:grid-cols-2 md:gap-y-7 lg:grid-cols-3 lg:px-7 xl:grid-cols-4 xl:px-0">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={`project-${i}`} {...project} />
              ))}
            </div>
          </div>
        </LoadAnimate>
      </section>
      <div id="contact" />
    </>
  );
}

Works.propTypes = {};
