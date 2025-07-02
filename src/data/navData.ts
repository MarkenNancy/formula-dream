import type { Props as NavLinkProps } from "@/components/atom/NavLink/NavLink";

export interface ServicesLinksType extends NavLinkProps {
  subNav?: NavLinkProps[];
}

export const servicesLinks: ServicesLinksType[] = [
  {
    children: "HOME",
    href: "/",
  },
  {
    children: "INFO",
    href: "/",
  },
  {
    children: "SUPPORT",
    href: "/",
  },
  {
    children: "PATNERSHIP",
    href: "/",
  },
];
export const navLinks: NavLinkProps[] = [
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
