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

// import React from 'react';
// import PropTypes from 'prop-types';
// import Iconify from '../Iconify';

// // ----------------------------------------------------------------------

// export default function TechSkillIcon({ label, icon, iconClasses }) {
//   return (
//     <div className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-neutral-900/80 dark:border-neutral-800 dark:hover:bg-neutral-900 dark:hover:shadow-neutral-950/50">
//       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 p-2.5 transition-colors duration-300 dark:bg-white/10 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20">
//         <Iconify icon={icon} classes={`${iconClasses} text-2xl`} />
//       </div>
//       <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
//         {label}
//       </span>
//     </div>
//   );
// }

// // ----------------------------------------------------------------------

// TechSkillIcon.propTypes = {
//   label: PropTypes.string,
//   proficiency: PropTypes.string,
//   icon: PropTypes.string,
//   iconClasses: PropTypes.string,
//   popoverId: PropTypes.string,
// };
