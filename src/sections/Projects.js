import React from 'react';
// components
import ProjectCard from '../components/works/ProjectCard';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mocks
import { PROJECTS } from '../mock/projects';

// ----------------------------------------------------------------------

export default function Projects() {
  return (
    <>
      <section id="works" className="container mx-auto max-w-[90%] space-y-12 px-5 py-24">
        <div className="flex flex-col items-center space-y-4 text-center">
          <HeadingAnimate>
            <h2 className="mb-5 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
              Featured Projects
            </h2>
          </HeadingAnimate>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A showcase of my recent work, ranging from web applications to full-stack solutions.
          </p>
        </div>

        <LoadAnimate amount={0}>
          <div className="flex w-full flex-col items-center">
            <div className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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

Projects.propTypes = {};
