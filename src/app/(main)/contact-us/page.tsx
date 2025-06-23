import React from "react";
import { Address, Container, Icons, Typo } from "@/components";
import Image from "next/image";
// import MergeSection from "@/components/about/MergeSection/MergeSection";
import ContactCardGrid from "@/components/organisms/ContactCardGrid/ContactCardGrid";
import LocationsTabs from "@/components/molecules/LocationsTabs/LocationsTabs";
import PageBanner from "@/components/molecules/PageBanner/PageBanner";

// seo
import type { Metadata } from "next";
import { contactUsPolicySeo } from "@/data/seoData";
export const metadata: Metadata = contactUsPolicySeo;
// end seo

const ContactUs = () => {
  return (
    <>
      <PageBanner
        title="Your Thoughts, Our Priority"
        description="No matter the question or topic, we’re eager to engage and assist."
        titleClass="lg:max-w-[25rem] max-w-[18rem] text-pretty"
        video={{
          source: "/video/bannerAbout.mov",
        }}
      />
      <section className="md:pt-20 pt-10">
        <Container isSmall>
          <ContactCardGrid
            cards={[
              {
                title: "Business Enquiries",
                description: (
                  <>
                    What’s next for your business? Let’s explore the
                    possibilities and turn bold ideas into actionable solutions.
                  </>
                ),
                action: {
                  children: "Get in touch",
                  typeForm: "business",
                  hiddenFields: {
                    source_website: "Clarient",
                  },
                },
              },
              {
                title: "Careers",
                description: (
                  <>
                    At Clarient, we value inquisitive minds and fearless
                    thinkers. If you’re ready to contribute to meaningful
                    digital innovation, we’re ready for you.
                  </>
                ),
                action: {
                  children: "Submit Your Resume",
                  typeForm: "careers",
                  hiddenFields: {
                    source_website: "clarient",
                  },
                },
              },
              {
                title: "Media Enquiries",
                description: (
                  <>
                    Planning an event or crafting a feature? We’re here to
                    provide insights, thought leadership, and expert commentary.
                  </>
                ),
                action: {
                  children: "Reach Out",
                  typeForm: "media",
                  hiddenFields: {
                    source_website: "Clarient",
                  },
                },
              },
              {
                title: "Clarient Partner Program",
                description: (
                  <>
                    Join our partner ecosystem. We’re actively seeking
                    collaborations in key markets across the USA, UK, Germany,
                    UAE, Singapore, Australia, and beyond.
                  </>
                ),
                action: {
                  children: "Let’s Collaborate",
                  typeForm: "partner",
                  hiddenFields: {
                    source_website: "Clarient",
                  },
                },
              },
              {
                className: "pb-0",
                content: (
                  <>
                    <span className="flex items-center gap-3 mb-[.625rem]">
                      <Icons
                        className="text-[#9B9B9B]"
                        name="email"
                        size={1.5}
                        variant="stroke"
                      />
                      <a
                        className="text-secondary transition-all font-medium hover:font-bold"
                        href="mailto:hello@clarient.us"
                      >
                        hello@clarient.us
                      </a>
                    </span>
                    {/* <span className="flex items-center gap-3 mb-[.625rem]">
                      <Icons
                        className="text-[#9B9B9B]"
                        name="call"
                        size={1.5}
                        variant="stroke"
                      />
                      <a
                        className="text-secondary transition-all font-medium hover:font-bold"
                        href="tel:+911724109254"
                      >
                        +91 172 410-9254
                      </a>
                    </span> */}
                  </>
                ),
                title: "General Enquiries",
                description: (
                  <>
                    We’re Listening! Whether it’s a question, a comment, or an
                    opportunity to collaborate, we’re here to engage.
                  </>
                ),
              },
            ]}
          />
        </Container>
      </section>
      <section className="md:pt-[6.875rem] pt-4 pb-9 lg:pb-0 bg-gradientEnd">
        <Container isSmall>
          <div className="grid md:grid-cols-12">
            <div className="col-span-6">
              <Typo tag="h2" weight="bold">
                Our Locations
              </Typo>
              <Typo tag="p" className="mt-4 text-pretty">
                At Clarient, our global presence ensures seamless collaboration
                across time zones.
              </Typo>
            </div>
          </div>
          <LocationsTabs
            className="mt-10"
            locations={[
              {
                id: "location-ind",
                label: "United States",
                content: (
                  <div>
                    <div className="grid lg:grid-cols-12">
                      <div className="col-span-5">
                        <Typo className="text-[#333] opacity-65" tag="p">
                          <b className="font-bold">Executive HQ</b>
                          <br />
                          Clarient Systems Corporation{" "}
                          <span className="inline-block">
                            (A Delaware Corporation)
                          </span>
                          <br />
                          <Address />
                        </Typo>
                        <div className="mt-5 grid gap-3">
                          <a
                            className="inline-flex items-center gap-3 hover:font-semibold transition-all"
                            href="mailto:hello@clarient.us"
                          >
                            <Icons
                              className="text-[#9B9B9B]"
                              name="email"
                              size={1.5}
                            />
                            <span>hello@clarient.us</span>
                          </a>
                          {/* <a
                            className="inline-flex items-center gap-3 hover:font-semibold transition-all"
                            href="tel:+911724190900"
                          >
                            <Icons
                              className="text-[#9B9B9B]"
                              name="call"
                              size={1.5}
                            />
                            <span>+91 172 4190900</span>
                          </a> */}
                        </div>
                        <div className="my-4 py-3">
                          <a
                            href="https://maps.app.goo.gl/veBoS5HvCZHo72vMA"
                            className="text-15 text-secondary font-semibold"
                            target="_black"
                          >
                            Visiting Us?
                          </a>
                        </div>
                      </div>
                      <div className="col-span-7 [&>img]:max-w-full [&>img]:h-auto">
                        <Image
                          alt="India"
                          // src="/images/contact-us/india.svg"
                          src="/images/contact-us/usa.svg"
                          width={100}
                          height={100}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
