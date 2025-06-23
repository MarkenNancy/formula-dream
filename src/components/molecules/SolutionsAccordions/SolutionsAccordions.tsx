"use client";
import React, { FC, useState } from "react";
import { Container, Button, ServicesIcons } from "@/components";
import SolutionsAccordionItm, {
  Props as SolutionsAccordionItmProps,
} from "./SolutionsAccordionItm";
import { twMerge } from "tailwind-merge";
export type Props = {
  className?: string;
  style?: React.CSSProperties;
};

const solutionsData: SolutionsAccordionItmProps[] = [
  {
    id: 1,
    title: "Customer & Digital Experience Transformation",
    description: (
      <>
        <p>
          Create experiences that connect, convert, and endure. Clarient helps
          you reimagine digital touchpoints with immersive, AI-powered, and
          user-centered solutions.
        </p>
        <Button
          variant="secondary"
          isRounded
          className="mt-5"
          type="link"
          href="/solutions/customer-digital-experience-transformation"
          isScrole
        >
          Explore Experience Transformation
        </Button>
      </>
    ),
  },
  {
    id: 2,
    title: "PeopleTech- HR Transformation",
    description: (
      <>
        <p>
          Empower your workforce with intelligent tools for hiring, engagement,
          and growth. Our HR tech solutions transform employee experience and
          enable data-driven people strategies.
        </p>
        <Button
          variant="secondary"
          isRounded
          className="mt-5"
          type="link"
          href="/solutions/talent-management-employee-experience"
          isScrole
        >
          Explore Our HR Transformation Solutions
        </Button>
      </>
    ),
  },
  {
    id: 3,
    title: "Governance, Risk & Compliance",
    description: (
      <>
        <p>
          Automate compliance and mitigate risk with our AI-driven GRC
          solutions. We help you stay ahead of regulatory change while
          simplifying oversight and boosting operational resilience.
        </p>
        <Button
          variant="secondary"
          isRounded
          className="mt-5"
          type="link"
          href="/solutions/risk-management-compliance-automation"
          isScrole
        >
          Discover Our GRC Approach
        </Button>
      </>
    ),
  },
  {
    id: 4,
    title: "ESG & ClimateTech",
    description: (
      <>
        <p>
          Accelerate your sustainability journey with Clarient’s ESG platforms
          and climate intelligence solutions. From carbon tracking to impact
          reporting, we help you lead with purpose.
        </p>
        <Button
          variant="secondary"
          isRounded
          className="mt-5"
          type="link"
          href="/solutions/esg-solutions"
          isScrole
        >
          Lead with ESG Innovation
        </Button>
      </>
    ),
  },
  {
    id: 5,
    title: "Healthcare & Life Sciences",
    description: (
      <>
        <p>
          Power patient-first innovation. Our digital health solutions
          streamline care, ensure compliance, and drive better outcomes across
          clinical, research, and operational functions.
        </p>
        <Button
          variant="secondary"
          isRounded
          className="mt-5"
          type="link"
          href="/industries/healthcare-and-life-sciences"
          isScrole
        >
          Transform Healthcare with Us
        </Button>
      </>
    ),
  },
  {
    id: 6,
    title: "Media, Entertainment & Publication",
    description: (
      <>
        <p>
          Reimagine how stories are created, managed, and monetized. We bring
          AI-powered automation and scalable platforms to the fast-evolving
          media and content landscape.
        </p>
        <Button
          variant="secondary"
          isRounded
          className="mt-5"
          type="link"
          href="/industries/media-entertainment-and-publishing"
          isScrole
        >
          Talk to Us About Media Transformation
        </Button>
      </>
    ),
  },
  {
    id: 7,
    title: "Technology, SaaS & Consulting",
    description: (
      <>
        <p>
          We help tech and consulting businesses optimize the full
          lifecycle—from platform development and market readiness to
          intelligent automation and customer experience transformation.
        </p>
        <Button
          variant="secondary"
          isRounded
          className="mt-5"
          type="link"
          href="/industries/technology-saas-and-consulting"
          isScrole
        >
          Drive Tech Excellence with Clarient
        </Button>
      </>
    ),
  },
];
const SolutionsAccordions: FC<Props> = ({ className, style }) => {
  const [isActive, setIsActive] = useState(-1);
  const handleActive = (index: number) => {
    if (isActive === index) {
      setIsActive(-1);
    } else {
      setIsActive(index);
    }
  };

  const sliceArray = (arr: SolutionsAccordionItmProps[], index: number) => {
    const firstHalf = arr.slice(0, index);
    const secondHalf = arr.slice(index);
    return [firstHalf, secondHalf];
  };

  const [firstArray, secondArray] = sliceArray(
    solutionsData,
    Math.round(solutionsData.length / 2)
  );

  return (
    <div className={twMerge(``, className)} style={style}>
      <Container>
        <div className="grid lg:grid-cols-12 rounded-[0.625rem] items-end">
          <div className="lg:col-span-10 py-6 md:p-9 lg:p-16 lg:pb-20 ps-0 md:ps-0 lg:ps-0">
            <div className="md:grid-cols-2 gap-x-10 md:grid">
              <div>
                {firstArray.map((accordion, index) => (
                  <SolutionsAccordionItm
                    {...accordion}
                    key={accordion.id}
                    delay={index * 0.1}
                    isActive={isActive === accordion.id ? true : false}
                    isLats={index === solutionsData.length - 1 ? true : false}
                    handleActive={() => handleActive(accordion.id)}
                  />
                ))}
              </div>
              <div>
                {secondArray.map((accordion, index) => (
                  <SolutionsAccordionItm
                    {...accordion}
                    key={accordion.id}
                    delay={index * 0.1}
                    isActive={isActive === accordion.id ? true : false}
                    isLats={index === solutionsData.length - 1 ? true : false}
                    handleActive={() => handleActive(accordion.id)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 text-end">
            <ServicesIcons name="servicesAccordion" className="opacity-90" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SolutionsAccordions;
