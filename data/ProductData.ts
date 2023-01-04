export type ProductDataProps = {
  title: string;
  summary: string;
  image: string;
};

export const ProductData: ProductDataProps[] = [
  {
    title: 'Collaboration',
    summary:
      'Collaborative tools for facilitating communication and collaboration among team members.',
    image: '/images/card--3.png'
  },
  {
    title: 'Reporting and Analytics',
    summary:
      'Features for generating reports and analyzing data on the progress and performance of a project.',
    image: '/images/card--1.png'
  },
  {
    title: 'Resource Allocation',
    summary: 'Assign and track the use of resources within a project',
    image: '/images/card--2.png'
  },
  {
    title: 'Project Management',
    summary:
      'Tool for organizing and tracking tasks and deadlines within a project',
    image: '/images/card--3.png'
  },
  {
    title: 'Time Tracking',
    summary:
      'Recording and analyzing the time spent on tasks within a project.',
    image: '/images/card--4.png'
  }
];
