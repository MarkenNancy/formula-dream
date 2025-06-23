import React from "react";
import LandingPageOne from "@/components/templates/LandingPage/LandingPageOne";

// seo
import { blueprintSeo } from "@/data/seoData";
import { Metadata } from "next";
export const metadata: Metadata = blueprintSeo;
// end seo

const AiBlueprint = () => {
  return (
    <>
      <LandingPageOne
        banner={{
          className: "lg:min-h-[0]",
          title: "Let’s Design Your AI Blueprint",
          description:
            "A free, tailored roadmap to unlock AI-driven growth for your business.",
          // action: {
          //   children: (
          //     <>
          //       Talk to an <b className="ms-1">AI Strategy Lead</b>
          //     </>
          //   ),
          //   className: "uppercase",
          //   typeForm: "contact",
          // },
          video: {
            source: "/video/aiBlueprint.mp4",
            // poster: "/images/about/videoPoster.jpg",
          },
        }}
        overview={{
          title: "Turn AI Possibilities into a Strategic Plan",
          description:
            "Exploring AI is easy. Turning it into tangible business value is where most teams struggle. At Clarient, we help you move from scattered experimentation to a clear, focused strategy; one that aligns with your goals, scales with your vision, and delivers real outcomes.",
          cards: [
            {
              title: "Personalized AI strategy session",
              description:
                "Meet with a Clarient AI Lead to explore your goals.",
            },
            {
              title: "Custom AI Blueprint",
              description:
                "Get a roadmap designed for your unique business needs.",
            },
            {
              title: "Clear, actionable next steps",
              description:
                "Unlock transformation backed by clarity, precision, and confidence.",
            },
          ],
        }}
        testimonial={{
          title: "We Deliver What AI Promises.",
          description:
            " Our success is measured by the impact we create for our clients. Tangible value, real impact, every time.",
          testimonialCard: {
            authorName: "Will Feldman",
            authorDesignation: "CTO, Mid-Market Enterprise",
            message:
              "Clarient helped us define our Agentic AI strategy and helped us unlock over a million dollars in efficiency gains with a tailored AI plan that just works.",
          },
        }}
      />
    </>
  );
};

export default AiBlueprint;
