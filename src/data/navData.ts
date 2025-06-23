import type { Props as NavLinkProps } from "@/components/atom/NavLink/NavLink";

// export type NavLinksType = {
//     children: string;
//     title: React.ReactNode;
//     href: string;
//   };

export interface ServicesLinksType extends NavLinkProps {
  subNav?: NavLinkProps[];
}

export const servicesLinks: ServicesLinksType[] = [
  // {
  //   children: "AI at the Core",
  //   href: "#",
  //   isHighlight: true,
  // },
  {
    children: "HOME",
    href: "/services",
  },
  {
    children: "INFO",
    href: "/services",
  },
  {
    children: "SUPPORT",
    href: "/services",
  },
  {
    children: "PATNERSHIP",
    href: "/services",
  },
  // {
  //   children: "Solutions",
  //   href: "/solutions",
  //   subNav: [
  //     {
  //       children: "ESG Solutions",
  //       href: "/solutions/esg-solutions",
  //     },
  //     {
  //       children: "Customer & Digital Experience Transformation",
  //       href: "/solutions/customer-digital-experience-transformation",
  //     },
  //     {
  //       children: "Risk management & compliance automation",
  //       href: "/solutions/risk-management-compliance-automation",
  //     },
  //     {
  //       children: "Talent Management & employee experience",
  //       href: "/solutions/talent-management-employee-experience",
  //     },
  //     {
  //       children: "Startup Technology Accelerator",
  //       href: "/solutions/startup-technology-accelerator",
  //     },
  //   ],
  // },
  // {
  //   children: "Industries",
  //   href: "/industries",
  //   subNav: [
  //     {
  //       children: "Media, Entertainment, and Publishing",
  //       href: "/industries/media-entertainment-and-publishing",
  //     },
  //     {
  //       children: "Healthcare & Life sciences",
  //       href: "/industries/healthcare-and-life-sciences",
  //     },
  //     {
  //       children: "Technology, SaaS and Consulting",
  //       href: "/industries/technology-saas-and-consulting",
  //     },
  //     {
  //       children: "Retail & eCommerce",
  //       href: "/industries/retail-and-ecommerce",
  //     },
  //     {
  //       children: "Education",
  //       href: "/industries/education",
  //     },
  //     {
  //       children: "CleanTech",
  //       href: "/industries/cleantech",
  //     },
  //   ],
  // },
  // {
  //   children: "Insights",
  //   href: "/insights",
  //   isParent: true,
  // },
];
export const navLinks: NavLinkProps[] = [
  // {
  //   children: "Careers",
  //   href: "/careers",
  // },
  // {
  //   children: "About Us",
  //   href: "/about-us",
  // },
  // // {
  // //   children: "MediaCenter",
  // //   href: "#",
  // // },
  // {
  //   children: "Contact Us",
  //   href: "/contact-us",
  // },
  {
    children: "LOGIN",
    href: "/careers",
  },
  {
    children: "SIGN UP",
    href: "/about-us",
  },
];

export const cmsLinks: NavLinkProps[] = [
  {
    children: "Your Privacy Matters",
    href: "/privacy-policy",
    // href: "#",
  },
  {
    children: "Terms of Use",
    href: "/terms-conditions",
    // href: "#",
  },
  {
    children: "Cookies & GDPR Compliance",
    href: "/cookie-policy",
    // href: "#",
  },
];
