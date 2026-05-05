import React from 'react';
import Image from 'next/image';

export const ListExperience = ({ data }) => {
  return (
    <div className="relative border-l-2 border-gray-100 pl-8 pb-12 last:pb-0 dark:border-neutral-800">
      {/* Timeline Bullet/Logo */}
      <div className="absolute -left-[21px] top-0 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-sm dark:border-neutral-900 dark:bg-neutral-800">
        <Image src={data.img} width={32} height={32} alt={data.company} className="object-contain" />
      </div>

      <div className="flex flex-col gap-4">
        {/* Header: Company, Role, and Date */}
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.company}
            </h3>
            <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
              {data.position}
            </p>
          </div>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:text-sm">
            {data.year}
          </span>
        </div>

        {/* Tech Stack Pills */}
        {data.skills && data.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-gray-400"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Responsibilities */}
        <div className="space-y-3">
          <p className="text-sm font-bold text-gray-700 dark:text-gray-300">
            The responsibilities include:
          </p>
          <ul className="space-y-2.5">
            {data.tasks.map((task, index) => (
              <li 
                key={index} 
                className="relative pl-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-gray-200"
              >
                <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-gray-300 dark:bg-neutral-700" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
