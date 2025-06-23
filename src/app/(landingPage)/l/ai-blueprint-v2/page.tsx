import React from "react";
import LandingPageTwo from "@/components/templates/LandingPage/LandingPageTwo";

// seo
import { blueprintSeo } from "@/data/seoData";
import { Metadata } from "next";
export const metadata: Metadata = blueprintSeo;
// end seo

const AiBlueprintV2 = () => {
  return (
    <>
      <LandingPageTwo
        banner={{
          title: "Let’s Design Your AI Blueprint",
          description:
            "A free, tailored roadmap to unlock AI-driven growth for your business.",
          scrollToId: "letsbuild",
          action: {
            children: (
              <>
                Talk to an <b className="ms-1">AI Strategy Lead</b>
              </>
            ),
            className: "uppercase",
            // typeForm: "contact",
          },
          video: {
            source: "/video/aiBlueprint.mp4",
            poster: "/images/about/videoPoster.jpg",
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
              image: "/images/bluePrint/vector.svg",
              imageWidth: 112,
              imageHeight: 125,
            },
            {
              title: "Custom AI Blueprint",
              description:
                "Get a roadmap designed for your unique business needs.",
              image: "/images/bluePrint/vector1.svg",
              imageWidth: 157,
              imageHeight: 99,
            },
            {
              title: "Clear, actionable next steps",
              description:
                "Unlock transformation backed by clarity, precision, and confidence.",
              image: "/images/bluePrint/vector2.svg",
              imageWidth: 125,
              imageHeight: 105,
            },
          ],
        }}
        testimonial={{
          title: "Testimonials",

          testimonialCard: [
            {
              title:
                "Clarient helped us define our Agentic AI strategy and helped us unlock over a million dollars in efficiency gains with a tailored AI plan that just works.",
              author: "Will Feldman",
              designation: "CTO, Mid-Market Enterprise",
            },
          ],
        }}
      />
    </>
  );
};

export default AiBlueprintV2;
