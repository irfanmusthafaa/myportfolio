import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function TechSkillIcon({ label, icon, iconClasses }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-neutral-900/80 dark:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:shadow-neutral-950/50">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 p-1.5 dark:bg-neutral-800/50">
        <Iconify icon={icon} classes={`${iconClasses} text-2xl`} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
        {label}
      </span>
    </div>
  );
}

// ----------------------------------------------------------------------

TechSkillIcon.propTypes = {
  label: PropTypes.string,
  proficiency: PropTypes.string,
  icon: PropTypes.string,
  iconClasses: PropTypes.string,
  popoverId: PropTypes.string,
};
