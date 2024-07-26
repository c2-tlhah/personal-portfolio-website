import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'other projects',
  projects: [
    {
      id: getId(),
      name: 'Data Modeling',
      url: 'https://github.com/c2-tlhah/Data-Modeling-Project',
      repo: 'https://github.com/c2-tlhah/Data-Modeling-Project',
      img: 'https://i.postimg.cc/yNRDKYHc/Model-ERD.png',
      year: 2024,
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'SQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'Jupyter Notebook', icon: 'vscode-icons:file-type-jupyter' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
      ],
    },
    {
      id: getId(),
      name: 'Autonomous Delivery Robot',
      url: 'https://github.com/c2-tlhah/atnomous-delivery-robot',
      repo: 'https://github.com/c2-tlhah/atnomous-delivery-robot',
      img: 'https://i.postimg.cc/D00F2BXH/Delivery-Robot.png',
      year: 2024,
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Matplotlib', icon: 'logos:matplotlib' },
      ],
    },
    {
      id: getId(),
      name: 'Sudoku Solver',
      url: 'https://github.com/c2-tlhah/sudoku-solver',
      repo: 'https://github.com/c2-tlhah/sudoku-solver',
      img: 'https://i.postimg.cc/HxZDPXh2/sokuku.png',
      year: 2024,
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        
      ],
    },
  ],
};
