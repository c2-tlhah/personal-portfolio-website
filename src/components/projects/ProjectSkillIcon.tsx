import { Icon } from '@iconify/react';

type Props = {
  src: string;
  name: string;
};

const ProjectSkillIcon = ({ src, name }: Props) => {
  return (
    <div className="text-text hover:text-text relative grid text-sm rounded-full bg-bg shadow-sm dark:shadow-xl drop-shadow-md dark:drop-shadow-lg h-6 w-6 place-items-center group">
      <Icon icon={src} width="12" height="12" />
      <div className="absolute invisible px-2 py-1 text-sm text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100">
        {name}
        <svg
          className="absolute left-0 w-full h-2 text-slate-900/75 dark:text-slate-700/90 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default ProjectSkillIcon;
