export type ProductDataProps = {
  title: string;
  summary: string;
  image: string;
};

export const ProductData: ProductDataProps[] = [
  {
    title: 'Resource Pooling',
    summary: 'Create a thrift group and save towards a common goal',
    image: '/images/card--3.png'
  },
  {
    title: 'Realtime Graph Chart',
    summary: 'View your expenses and incomes realtime.',
    image: '/images/card--1.png'
  },
  {
    title: 'Expenses Limiter',
    summary: 'Control your expenses.',
    image: '/images/card--2.png'
  },
  {
    title: 'Link multiple Accounts',
    summary: 'Add multiple account into one whole account.',
    image: '/images/card--3.png'
  },
  {
    title: 'Analysed Report',
    summary: 'Get report analysis at intervals.',
    image: '/images/card--4.png'
  }
];
