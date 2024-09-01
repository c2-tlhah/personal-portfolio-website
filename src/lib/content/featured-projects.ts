import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Youtube Data Engineering',
      description: 'A data engineering project to ETL Youtube data using AWS.',
      tasks: 'A data engineering project to ETL Youtube data using AWS services like S3, Glue, Athena, and Quicksight. The project extracts data from Youtube API, transforms it using Glue ETL jobs, and loads it into S3 for analysis.',
      url: 'https://github.com/c2-tlhah/youtube-data-engineering',
      img: 'https://i.postimg.cc/FRxXL5Z6/youtube-data-engineering-architecture.jpg',
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'AWS', icon: 'vscode-icons:file-type-aws' },
        { name: 'Apache Spark', icon: 'logos:apache-spark' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
      ],
    },
    {
      id: getId(),
      name: 'Chat with Groq',
      description: 'A chat application using Groq for real-time messaging.',
      tasks: 'A chat application using Groq for real-time messaging. The project uses AIDL for communication between the client and server. It also uses Material You for dynamic theming and color theory for a better user experience.',
      url: 'https://github.com/c2-tlhah/chat-with-groq',
      img: 'https://i.postimg.cc/Sskwq1hf/1-Q-u-FKGw-JY8z1-U1yu-Te-f-RQ.webp',
      projectSkills: [
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Streamlit', icon: 'logos:' },
        { name: 'GROQ', icon: 'logos:' },
        { name: 'Groq API', icon: 'logos:' },
      ],
    },
  ],
};

export default featuredProjectsSection;
