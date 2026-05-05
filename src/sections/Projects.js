import React, { useState } from 'react';
// components
import Iconify from '../components/Iconify';
import ProjectCard from '../components/works/ProjectCard';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mocks
import { PROJECTS, PROJECT_CATEGORY, TABS } from '../mock/projects';

// ----------------------------------------------------------------------

export default function Projects() {
  const [currentTab, setCurrentTab] = useState('all');

  const activeClass =
    'inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-primary-600 rounded-full shadow-lg shadow-primary-200 transition-all duration-200 dark:bg-primary-500 dark:shadow-primary-900/20';

  const inactiveClass =
    'inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-gray-500 bg-transparent rounded-full hover:bg-gray-100 hover:text-gray-700 transition-all duration-200 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-200';

  const handleOnClick = (_value) => {
    setCurrentTab(_value);
  };

  const renderTabContent = PROJECTS.map((project, i) => {
    if (currentTab === PROJECT_CATEGORY.ALL) {
      return <ProjectCard key={`project-${i}`} {...project} />;
    }

    if (project.category.includes(currentTab)) {
      return <ProjectCard key={`project-${i}`} {...project} />;
    }

    return null;
  });

  return (
    <>
      <section className="container mx-auto px-4 mt-24 space-y-12 pt-16 pb-20">
        <div className="flex flex-col items-center text-center space-y-4">
          <HeadingAnimate>
            <h2 className="font-lato text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Featured Projects
            </h2>
          </HeadingAnimate>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A showcase of my recent work, ranging from web applications to full-stack solutions.
          </p>
        </div>

        <LoadAnimate amount={0}>
          <div className="flex w-full flex-col items-center">
            <div className="inline-flex p-1.5 bg-gray-50 rounded-full dark:bg-neutral-900/50 border border-gray-100 dark:border-neutral-800">
              <ul id="works-tab" className="flex flex-wrap justify-center gap-1 list-none">
                {TABS.map((tab, i) => (
                  <li
                    key={`tab ${i}`}
                    onClick={() => handleOnClick(tab.value)}
                    className="cursor-pointer"
                  >
                    <div className={currentTab === tab.value ? activeClass : inactiveClass}>
                      <Iconify icon={tab.icon} />
                      <span>{tab.label}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {renderTabContent}
            </div>
          </div>
        </LoadAnimate>
      </section>
      <div id="contact" />
    </>
  );
}

Projects.propTypes = {};
