export type NavbarDataProps = {
  label: string;
  hasIcon: boolean;
  href: string;
};

export const NavbarData: NavbarDataProps[] = [
  {
    label: 'About UIFry?',
    hasIcon: true,
    href: '/about'
  },
  {
    label: 'Features',
    hasIcon: true,
    href: '/features'
  },
  {
    label: 'Resources',
    hasIcon: true,
    href: '/resources'
  },
  {
    label: 'Company',
    hasIcon: true,
    href: '/company'
  }
];

export const NavbarDataContact: NavbarDataProps[] = [
  {
    label: 'Contact Sales',
    hasIcon: false,
    href: '/sales'
  }
];
