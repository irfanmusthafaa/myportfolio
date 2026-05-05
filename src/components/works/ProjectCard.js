import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function ProjectCard({ imgSrc, title, description, repoLink, sourceLink, techIcons }) {
  return (
    <div className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300  hover:shadow-4xl dark:border-gray-700 dark:bg-neutral-900/80">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={imgSrc?.src || imgSrc}
          alt={title}
        />
        {/* Overlay for better link visibility if needed */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-colors duration-300" /> */}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mb-6 flex-1 text-sm font-normal leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack - Text Pills */}
        {techIcons && techIcons.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {techIcons.map((tech, i) => (
              <span
                key={`tech-${i}`}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:border-gray-700 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700 dark:hover:text-primary-300"
              >
                {tech.label}
              </span>
            ))}
          </div>
        )}

        {/* <div className="flex items-center justify-end gap-5 border-t border-gray-100 pt-4 dark:border-gray-800">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              title="GitHub Repository"
              className="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-300"
            >
              <Iconify classes="text-2xl" icon="akar-icons:github-fill" />
            </a>
          )}
          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noreferrer"
              title="Live Demo"
              className="text-gray-500 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-300"
            >
              <Iconify classes="text-2xl" icon="iconoir:open-new-window" />
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  repoLink: PropTypes.string,
  sourceLink: PropTypes.string,
  techIcons: PropTypes.array,
};
