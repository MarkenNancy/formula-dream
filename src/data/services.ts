import { Props as ButtonProps } from "@/components/atom/Button/Button";
import { Props as ServicesIconsProps } from "@/components/atom/ServicesIcons/ServicesIcons";
import { Props as LinkListProps } from "@/components/atom/LinkList/LinkList";
import React from "react";
export type ServicesDataProps = {
  title: string;
  description: React.ReactNode;
  links: LinkListProps["list"];
  action?: ButtonProps;
  servicesIcons?: ServicesIconsProps["name"];
};
export const servicesData: ServicesDataProps[] = [
  {
    title: "AI Strategy, Development, Execution & Operations",
    description:
      "We engineer AI systems that move beyond pilots to production. Our goal is to drive measurable efficiency gains, cost optimization, and competitive differentiation at scale.",
    links: [
      {
        href: "/services/ai-services",
        children: "Agentic AI Framework ",
      },
      {
        href: "/services/ai-services",
        children: "Generative AI",
      },
      {
        href: "/services/ai-services",
        children: "AI Governance & Responsible Tech",
      },
      {
        href: "/services/ai-services",
        children: "AI Orchestration",
      },
      {
        href: "/services/ai-services",
        children: "AI-Driven Outsourcing & Product Teams",
      },
    ],
    action: {
      children: "Talk to us about AI",
      href: "/services/ai-services",
      type: "link",
    },
    servicesIcons: "AIStrategy",
  },
  {
    title: "Digital Transformation Consulting",
    description:
      "We modernize operations with precision—aligning technology investments with EBITDA impact and workforce adoption.",
    links: [
      {
        href: "/services/digital-transformation",
        children: "Technology Modernization & Roadmap Development",
      },
      {
        href: "/services/digital-transformation",
        children: "Business Process Optimization & Automation",
      },
      {
        href: "/services/digital-transformation",
        children: "Data-Driven Strategy & Decision Intelligence",
      },
      {
        href: "/services/digital-transformation",
        children: "Cloud Strategy & Migration",
      },
      {
        href: "/services/digital-transformation",
        children: "DevOps & CI/CD Automation",
      },
    ],
    action: {
      children: "Rethink what's possible",
      href: "/services/digital-transformation",
      type: "link",
    },
    servicesIcons: "digitalTransformation",
  },
  {
    title: "Strategic Outsourcing & Staff Augmentation",
    description:
      "Elastic expertise on demand that scales with your initiatives—embedding world-class talent where and when you need it most.",
    links: [
      {
        href: "/services/strategic-outsourcing-and-staff-augmentation",
        children: "On-Demand Tech Talent & Managed Teams",
      },
      {
        href: "/services/strategic-outsourcing-and-staff-augmentation",
        children: "Dedicated Product & Engineering Teams",
      },
      {
        href: "/services/strategic-outsourcing-and-staff-augmentation",
        children: "Specialized IT & AI Talent Augmentation",
      },
      {
        href: "/services/strategic-outsourcing-and-staff-augmentation",
        children: "Creative Process Outsourcing",
      },
      {
        href: "/services/strategic-outsourcing-and-staff-augmentation",
        children: "Enterprise-Grade Software Development",
      },
    ],
    action: {
      children: "Scale with confidence",
      href: "/services/strategic-outsourcing-and-staff-augmentation",
      type: "link",
    },
    servicesIcons: "strategicOutsourcing",
  },
  {
    title: "User Experience Design",
    description:
      "We create experiences that balance functionality, beauty, and business outcomes—shaping products users want and businesses need.",
    links: [
      {
        href: "/solutions/customer-digital-experience-transformation",
        children: "Agile Product Innovation & Development",
      },
      {
        href: "/solutions/customer-digital-experience-transformation",
        children: "MVP Development & Market Validation",
      },
      {
        href: "/solutions/customer-digital-experience-transformation",
        children: "Full-Cycle Product Engineering",
      },
      {
        href: "/solutions/customer-digital-experience-transformation",
        children: "Launch & Scale Support",
      },
      {
        href: "/solutions/customer-digital-experience-transformation",
        children: "Experience Design & Strategy",
      },
    ],
    action: {
      children: "Design Experiences That Deliver ",
      href: "/solutions/customer-digital-experience-transformation",
      type: "link",
    },
    servicesIcons: "productEngineering",
  },
  // {
  //   title: "Cloud Solutions & Platforms",
  //   description:
  //     "Enterprise-grade cloud environments designed for security-first, compliance-ready operations without compromising agility.",
  //   links: [
  //     {
  //       href: "/services/cloud",
  //       children: "Cloud Strategy & Migration",
  //     },
  //     {
  //       href: "/services/cloud",
  //       children: "Cloud Infrastructure Management",
  //     },
  //     {
  //       href: "/services/cloud",
  //       children: "DevOps & CI/CD Automation",
  //     },
  //     {
  //       href: "/services/cloud",
  //       children: "AI-Powered Cloud Optimization",
  //     },
  //     {
  //       href: "/services/cloud",
  //       children: "Security & Compliance",
  //     },
  //   ],
  //   action: {
  //     children: "Smarter Cloud Starts Here",
  //     href: "/services/cloud",
  //     type: "link",
  //   },
  //   servicesIcons: "cloudSolutions",
  // },
  // {
  //   title: "Product Engineering",
  //   description:
  //     "From concept to scale, we build with the discipline of engineers and the vision of founders—delivering solutions users demand.",
  //   links: [
  //     {
  //       href: "/services/product-engineering",
  //       children: "Agile Product Innovation & Development",
  //     },
  //     {
  //       href: "/services/product-engineering",
  //       children: "MVP Development & Market Validation",
  //     },
  //     {
  //       href: "/services/product-engineering",
  //       children: "Full-Cycle Product Engineering",
  //     },
  //     {
  //       href: "/services/product-engineering",
  //       children: "Launch & Scale Support",
  //     },
  //   ],
  //   action: {
  //     children: "From Idea to Impact",
  //     href: "/services/product-engineering",
  //     type: "link",
  //   },
  //   servicesIcons: "productEngineering",
  // },
  // {
  //   title: "Enterprise Platforms",
  //   description:
  //     "We make your systems work harder—connecting platforms to reveal insights, eliminate redundancies, and accelerate workflows.",
  //   links: [
  //     {
  //       href: "/services/enterprise-platforms",
  //       children: "ERP, CRM & SaaS Platform Development",
  //     },
  //     {
  //       href: "/services/enterprise-platforms",
  //       children: "API-Driven Architectures & Systems Integration",
  //     },
  //     {
  //       href: "/services/enterprise-platforms",
  //       children: "Data & Analytics Platforms",
  //     },
  //     {
  //       href: "/services/enterprise-platforms",
  //       children: "Business Process & Workflow Automation",
  //     },
  //   ],
  //   action: {
  //     children: "Unlock Enterprise Efficiency",
  //     href: "/services/enterprise-platforms",
  //     type: "link",
  //   },
  //   servicesIcons: "enterprisePlatform",
  // },
  // {
  //   title: "Custom Application Development",
  //   description:
  //     "Tailored software solutions that solve unique challenges while maintaining enterprise-grade security and performance.",
  //   links: [
  //     {
  //       href: "/services/custom-application-development",
  //       children: "Enterprise-Grade Software Development",
  //     },
  //     {
  //       href: "/services/custom-application-development",
  //       children: "Web & Mobile Application Development",
  //     },
  //     {
  //       href: "/services/custom-application-development",
  //       children: "Microservices & Scalable Architectures",
  //     },
  //     {
  //       href: "/services/custom-application-development",
  //       children: "Performance Optimization & Ongoing Maintenance",
  //     },
  //   ],
  //   action: {
  //     children: "Tailored Tech, Real Results",
  //     href: "/services/custom-application-development",
  //     type: "link",
  //   },
  //   servicesIcons: "customAppDev",
  // },
];
