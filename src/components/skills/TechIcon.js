import React from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

export default function TechSkillIcon({ label, icon, iconClasses }) {
  return (
    <div className="group flex cursor-pointer items-center gap-2.5 rounded-xl border border-slate-100/80 bg-white px-3 py-1.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-md hover:shadow-primary-500/5 dark:border-neutral-800/60 dark:bg-neutral-900/60 dark:hover:border-primary-500/50 dark:hover:bg-neutral-900">
      <div className="flex h-7 w-7 items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Iconify icon={icon} classes={iconClasses} />
      </div>
      <span className="text-[11px] font-semibold tracking-wide text-slate-700 transition-colors duration-300 group-hover:text-primary-600 dark:text-neutral-300 dark:group-hover:text-primary-400">
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
