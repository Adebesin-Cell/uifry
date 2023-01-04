export type TestimonialDataProps = {
  content: string;
  image: string;
  name: string;
  title: string;
  heading: string;
};

export const TestimonialData: TestimonialDataProps[] = [
  {
    heading: 'Fantastic! Great Product.',
    content:
      "I've been using this product management dashboard for the past six months and it has completely transformed the way I run my business. The interface is intuitive and user-friendly, and it's helped me stay organized and on top of my workload. I highly recommend it to any entrepreneur looking to streamline their operations.",
    name: 'Jennifer Sanders',
    title: 'Small Business Owner',
    image: '/images/jennifer-sanders.jpg'
  },
  {
    heading: 'Seamless and easy to use.',
    content:
      "As a project manager, I'm constantly juggling multiple tasks and deadlines. This product management dashboard has been a game-changer for me - it helps me stay organized and on track, and has even helped me identify areas where I can be more efficient. I can't imagine going back to my old system!",
    name: 'Michael Smith',
    title: 'Project Manager',
    image: '/images/micheal-smith.jpg'
  },
  {
    heading: 'Amazing tool!',
    content:
      "I've used a few different product management tools in the past, but this one is by far the best. It's easy to use and customize, and the analytics and reporting features are top-notch. I've already seen a significant increase in my team's productivity since we started using it.",
    name: 'Sarah Williams',
    title: 'Product Manager',
    image: '/images/sarah-williams.jpg'
  },
  {
    heading: 'A life Saver!',
    content:
      "As a freelancer, it's important for me to stay organized and manage my time effectively. This product management dashboard has been a lifesaver - it helps me track my tasks and projects, and even integrates with my invoicing system. I highly recommend it to anyone looking to up their productivity game",
    name: 'John Doe',
    title: 'Freelance Designer',
    image: '/images/john-doe.jpg'
  }
];
