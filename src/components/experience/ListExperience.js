import React from 'react';
import Image from 'next/image';

export const ListExperience = ({ data }) => {
  return (
    <div className="dark:border-neutral-800/85 group relative border-l-2 border-slate-100 pl-8 pb-12 last:pb-0">
      {/* Timeline Bullet/Logo with scale and glow animations on group-hover */}
      <div className="absolute -left-[21px]  flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-sm ring-0 ring-primary-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-primary-500 group-hover:shadow-md group-hover:ring-4 dark:border-neutral-900 dark:bg-neutral-800">
        <Image
          src={data.img}
          width={32}
          height={32}
          alt={data.company}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Main Glassmorphic Card Container */}
      <div className="rounded-2xl border border-slate-100 bg-white/40 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 hover:border-primary-400/40 hover:shadow-md dark:border-neutral-800/50 dark:bg-neutral-900/30 dark:hover:border-primary-500/40 dark:hover:bg-neutral-900/60 md:p-6">
        <div className="flex flex-col gap-4">
          {/* Header: Company, Role, Tagline and Date */}
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-extrabold tracking-tight text-slate-800 transition-colors group-hover:text-primary-600 dark:text-neutral-50 dark:group-hover:text-primary-400">
                  {data.company}
                </h3>
                {data.tagline && (
                  <span className="rounded-md bg-slate-100/80 px-2 py-0.5 text-[9px] font-bold text-slate-500 dark:bg-neutral-800/80 dark:text-neutral-400">
                    {data.tagline}
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-primary-500 dark:text-primary-400">
                {data.position}
              </p>
            </div>
            <span className="shrink-0 rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-400 dark:border-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-500">
              {data.year}
            </span>
          </div>

          {/* Tech Stack Pills */}
          {data.skills && data.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-lg border border-slate-200/50 bg-slate-50/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-neutral-800 dark:bg-neutral-800/30 dark:text-neutral-400 dark:hover:border-primary-500 dark:hover:text-primary-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div className="h-[1px] w-full bg-slate-100 dark:bg-neutral-800/60" />

          {/* Responsibilities */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500">
              Key Responsibilities
            </p>
            <ul className="space-y-3">
              {data.tasks.map((task, index) => (
                <li
                  key={index}
                  className="relative pl-6 text-sm leading-relaxed text-slate-600 transition-colors hover:text-slate-800 dark:text-neutral-300 dark:hover:text-neutral-100"
                >
                  <svg
                    className="absolute left-0 top-1 h-3.5 w-3.5 text-primary-500 transition-transform duration-200 group-hover:scale-110 dark:text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
