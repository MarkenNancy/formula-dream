import React from "react";
import { Container, GetInTouch, Typo } from "@/components";
import ClientStat from "@/components/atom/ClientStat/ClientStat";
import Image from "next/image";
import Leader from "@/components/atom/Leader/Leader";
import ExcitingRole from "@/components/molecules/ExcitingRole/ExcitingRole";
import ScrollSpyNavbar from "@/components/molecules/ScrollSpyNavbar/ScrollSpyNavbar";
import { FadeUp, Parallax } from "@/components/animation";
import VideoVimeoIframe from "@/components/atom/VideoVimeoIframe/VideoVimeoIframe";
import PageBanner from "@/components/molecules/PageBanner/PageBanner";

// seo
import { aboutSeo } from "@/data/seoData";
import { Metadata } from "next";
export const metadata: Metadata = aboutSeo;
// end seo

const values = [
  {
    title: "Obsession with Customer Success",
    description:
      "We succeed when our clients thrive. Everything we do starts and ends with their success.",
    delay: 0.2,
  },
  {
    title: "Innovation",
    description:
      "Creativity and experimentation power our journey. We challenge the status quo and push boundaries.",
    delay: 0.3,
  },
  {
    title: "Integrity",
    description:
      "Transparency, accountability, and ethics are non-negotiable. We do what’s right, always.",
    delay: 0.4,
  },
  {
    title: "Collaboration",
    description:
      "Diversity is our strength. We bring together different perspectives to build smarter solutions.",
    delay: 0.5,
  },
  {
    title: "Continuous Learning",
    description:
      "Growth is our way of life. We stay curious, evolve, and keep getting better.",
    delay: 0.6,
  },
  {
    title: "Fun Matters",
    description:
      "We value creativity, camaraderie, and celebrating the journey. Success is better when shared.",
    delay: 0.7,
  },
];

const About = () => {
  return (
    <>
      <PageBanner
        title="Inspired by Innovation. Driven by Impact."
        description="We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be."
        video={{
          source: "/video/bannerAbout.mov",
          poster: "/images/about/videoPoster.jpg",
        }}
      />           
      <ScrollSpyNavbar
        className="-mt-[3.75rem]"
        pageName="About Us"
        nav={[
          {
            id: "overview",
            label: "company overview",
          },
          {
            id: "leadership",
            label: "leadership team",
          },
          {
            id: "ourvalues",
            label: "our values",
          },
          {
            id: "csr",
            label: "CSR initiatives",
          },
        ]}
      />
      <section
        id="overview"
        className="md:pt-28 pt-14 bg-[url('/images/about/overviewBg.jpg')] bg-repeat bg-cover"
      >
        <Container isSmall>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-10">
              <FadeUp delay={0.2}>
                <Typo tag="p" size="xl" className="text-pretty">
                  At <b>Clarient</b>, we’re here to make a difference. Our
                  purpose is simple: To create an impact, to push boundaries,
                  and to make a small but meaningful ding in the universe
                  through our work. This isn’t just our mission—it’s our ikigai,
                  the reason we do what we do.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.3}>
                <Typo tag="p" size="xl" className="text-pretty mt-8">
                  We blend AI, creativity, and strategy to drive transformation
                  where it matters most. From AI advisory and engineering to
                  operations and outsourcing, we build solutions that deliver
                  real results.
                </Typo>
              </FadeUp>
              <FadeUp delay={0.4}>
                <Typo tag="p" size="xl" className="text-pretty mt-2">
                  Our goal? To empower visionaries, fuel innovation, and drive
                  progress. We help you solve your toughest challenges and turn
                  ambitious ideas into tangible outcomes. The world is
                  evolving—fast. We’re here to help you stay ahead.
                </Typo>
              </FadeUp>
            </div>
          </div>
        </Container>
        <div className="md:pt-24 pt-12">
          <div id="numbers">
            <ClientStat />
          </div>
        </div>
      </section>
      <section id="leadership" className="overflow-hidden">
        <div className="relative z-10">
          <Container isSmall>
            <div className="grid md:grid-cols-11">
              <div className="md:col-span-5 h-full">
                <div className="lg:py-[4.875rem] py-10 md:pe-12 pe-0 w-full h-full">
                  <FadeUp delay={0.2}>
                    <Typo
                      tag="h2"
                      size="h2"
                      weight="normal"
                      isTitle
                      className="text-balance leading-none"
                    >
                      Visionary leadership. Exceptional results.
                    </Typo>
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <Typo tag="p" size="lg" className="text-pretty mt-4">
                      We’re led by innovators who believe in the power of AI to
                      create real-world impact. Our leadership combines deep
                      expertise, strategic insight, and a relentless drive to
                      push boundaries. They’re hands-on, collaborative, and
                      focused on one thing—making a difference.
                    </Typo>
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <Typo tag="p" size="lg" className="text-pretty mt-2">
                      Their focus is simple: Deliver real impact and keep
                      raising the bar. They guide our teams to build solutions
                      that are smart, scalable, and transformative.
                    </Typo>
                    {/* <Typo tag="p" size="lg" className="text-pretty mt-2">
                      The Team that Inspires and
                    </Typo> */}
                  </FadeUp>
                </div>
              </div>
              <div className="md:col-span-6 h-full">
                <div
                  className="w-full h-full lg:pt-[4.875rem] pt-10 lg:ps-16 ps-8 flex xl:flex-row flex-col items-end text-white"
                  style={{
                    background:
                      "linear-gradient(212deg, #3F1B7E -68.87%, #191919 66.49%)",
                  }}
                >
                  <div className="md:flex-1 lg:pb-[4.875rem] md:pb-10 pb-6 pe-6">
                    <FadeUp delay={0.2}>
                      <Typo tag="p" size="lg" className="text-pretty">
                        Working at the cross-section of technology and design,
                        we bring together incredible talent, insights, and
                        market-smarts to every engagement we’re a part of. For
                        over 27 years, our people have partnered with clients
                        across the globe to decipher what’s next, and help them
                        reimagine, reinvent and transform their businesses.
                      </Typo>
                      <Typo
                        tag="p"
                        size="lg"
                        weight="bold"
                        className="text-pretty mt-2"
                      >
                        Count on us being there. Every step of the way!
                      </Typo>
                    </FadeUp>
                    <div className="md:mt-10 mt-5">
                      <FadeUp delay={0.4}>
                        <Typo
                          tag="p"
                          size="lg"
                          weight="bold"
                          isTitle
                          className="text-pretty w-fit relativ max-lg:after:hidden after:absolute after:top-1/2 after:left-[115%] after:w-[16.25rem] after:h-px after:bg-white after:bg-opacity-10"
                        >
                          Harjeet S Gulati
                        </Typo>
                        <Typo tag="p" size="sm" className="text-pretty" isTitle>
                          Group Chair & CEO
                        </Typo>
                      </FadeUp>
                    </div>
                  </div>
                  <div>
                    <FadeUp delay={0.4}>
                      <Image
                        src="/images/about/harjeet.png"
                        alt="blogVideo-1"
                        width={262}
                        height={339}
                        className="w-full h-auto block"
                        quality={100}
                      />
                    </FadeUp>
                  </div>
                </div>
              </div>
            </div>
            <FadeUp>
              <div
                className="grid md:grid-cols-3 grid-cols-1 rounded-b-lg md:rounded-tl-lg overflow-hidden"
                // gap-px bg-[#E8E8E8]
                // style={{
                //   background: "rgba(255, 255, 255, 0.10)",
                //   backdropFilter: "blur(3.25rem)",
                // }}
              >
                <Leader
                  name="Harjeet S Gulati"
                  designation="Group Chair & CEO"
                  image="/images/about/leader/harjeet.jpg"
                  // linkedin="https://www.linkedin.com/in/harjeetsgulati/"
                  linkedin="https://www.linkedin.com/in/harjeetsgulati?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BeIC8AXBoSQSJHbCpAwOhrg%3D%3D"
                  twitter="https://x.com/harjeetgulati"
                  description={
                    <>
                      For over 25 years, Harjeet has been at the forefront of
                      the digital revolution. As a serial entrepreneur, investor
                      and visionary leader in the global UX space for over two
                      decades, he leads the Cerebrent Group as it expands across
                      the US, Europe, Australia and Asia. His expertise,
                      experience, and leadership continue to inspire us to push
                      the limits.
                    </>
                  }
                  driection="right-top"
                />

                <Leader
                  // className="border-r"
                  name="Harjiv Kaur"
                  designation="Group Vice-Chair & COO"
                  image="/images/about/leader/harjiv.jpg"
                  linkedin=""
                  description={
                    <>
                      As a seasoned professional with close to 20 years of
                      experience in building, training and leading teams, Harjiv
                      has overseen the journey of Millipixels from a fledgling
                      startup to an established player as an operational leader.
                      For over 6 years now, Harjiv has been intimately involved
                      with Compliance, HR and expansion of our operations across
                      multiple geographies.
                    </>
                  }
                  driection="right-top"
                />

                <Leader
                  className=""
                  name="Shweta Sharma"
                  designation="Group VP of Human Resources"
                  image="/images/about/leader/shweta.jpg"
                  linkedin="https://www.linkedin.com/in/shweta-sharma-4621a773/"
                  description={
                    <>
                      Since 2018 when Shweta first joined Millipixels, to now,
                      she has worked her way to lead the HR function At
                      Cerebrent, working with clients across the globe in
                      helping them source the right talent for their
                      initiatives. She has been a trail blazer and a recognized
                      HR leader in the region for almost 18 years. Yoga, Travel
                      and spending time with her family energise her every step
                      of the way.
                    </>
                  }
                  driection="left-top"
                />

                <Leader
                  // className="border-r"
                  name="Sumeet Kaur"
                  designation="VP- Content & Services"
                  image="/images/about/leader/sumeet.jpg"
                  linkedin="https://www.linkedin.com/in/sumeet-kaur/"
                  description={
                    <>
                      With close to 20 years of experience in the technology
                      industry, notably with organisations like Dell, Sumeet has
                      been a pillar of strength for the team with her role in
                      overseeing multiple initiatives and leading the content
                      space with our marketing leadership team. A traveller at
                      heart, she loves exploring new places, cultures and
                      cuisines and capturing these moments with her camera.
                    </>
                  }
                  driection="right-center"
                />

                <Leader
                  // className="border-r"
                  name="Rameshwar Trivedi"
                  designation="VP of Technology"
                  image="/images/about/leader/rameshwar.jpg"
                  linkedin="https://www.linkedin.com/in/iamrameshwar/"
                  description={
                    <>
                      Hailing from the beautiful city of lakes, Udaipur,
                      Rameshwar has been instrumental in setting the pace for
                      our technology architecture, DevOps, and delivery teams.
                      His leadership and impact is evident in the pace at which
                      Millipixels is launching new products. An acclaimed
                      blockchain and AI expert, his cross-cultural exposure
                      lends a distinct flavour to our products.
                    </>
                  }
                  driection="right-center"
                />

                <Leader
                  name="Dushyant Nagar"
                  designation="VP of Engineering"
                  image="/images/about/leader/dushyant.jpg"
                  linkedin="https://www.linkedin.com/in/dushyant-nagar-27960623/"
                  description={
                    <>
                      Passionate about reading, swimming, and travelling,
                      Dushyant has over 13 years of experience in developing and
                      rolling out large-scale solutions for clients across the
                      globe. He oversees the core engineering function At
                      Cerebrent, building solutions, mentoring engineering
                      teams, and ensuring we keep our standards high.
                    </>
                  }
                  driection="left-top"
                />

                <Leader
                  name="Jaismeen Kaur"
                  // className="rounded-bl-lg border-r"
                  designation="VP - Software & Service Delivery"
                  image="/images/about/leader/jaismeen.jpg"
                  linkedin="https://www.linkedin.com/in/jaismeen-kaur/"
                  description={
                    <>
                      From her roots in software quality assurance and an
                      abiding interest in business analysis, Jaismeen oversees
                      our delivery teams, working closely with product managers,
                      as well as internal and external stakeholders for seamless
                      solution delivery. She has been an instrumental part of
                      our journey since 2018, leaving a mark on our largest and
                      the most successful projects.
                    </>
                  }
                  driection="right-bottom"
                />

                <Leader
                  name="Deepak Sharma"
                  // className="border-r"
                  designation="VP- Creative Services"
                  image="/images/about/leader/deepak.jpg"
                  linkedin="https://www.linkedin.com/in/deepak-sharma-a12a1188/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  description={
                    <>
                      A passion for gardening, quiet walks along the rolling
                      hills of his native Solan, and a mind that’s a step ahead
                      when it comes to design is what defines Deepak. As a
                      design leader with over 13 years in the trenches, his work
                      has seen him lead some of our largest projects in the user
                      interface design as well as the creative services space
                      since 2018.
                    </>
                  }
                  driection="right-bottom"
                />

                <Leader
                  // className="rounded-br-lg"
                  name="Urvashi Sharma"
                  designation="Vice President of Sales"
                  image="/images/about/leader/urvashi.jpg"
                  linkedin="https://www.linkedin.com/in/urvashi-s-772660b/"
                  description={
                    <>
                      With over 15 years of experience across global markets
                      including North America, Europe, the UK, and Singapore,
                      Urvashi brings a strategic perspective and strong
                      relationship management skills to her role as VP of Sales.
                      Known for her target-oriented approach and commitment to
                      delivering results, she is focused on driving Millipixels'
                      growth through client acquisition and revenue generation.
                    </>
                  }
                  driection="left-bottom"
                />
                <Leader
                  name="Sandeep Shukla"
                  designation="Chief Growth Officer"
                  image="/images/about/leader/sandeep.jpg"
                  // linkedin="https://www.linkedin.com/in/harjeetsgulati/"
                  linkedin="https://www.linkedin.com/in/sandeep-shukla/"
                  description={
                    <>
                      An accomplished executive with domestic and international
                      experience in operations, P&L oversight, multi-channel
                      product distribution, and marketing across start-up and
                      growth-stage organizations. A results-driven leader with a
                      strong record in market identification, strategic
                      positioning, and operational efficiency. Proven track
                      record of boosting revenue, improving profitability, and
                      driving productivity, while remaining focused, pragmatic,
                      and effective in high-pressure environments.
                    </>
                  }
                  driection="right-bottom"
                />
                <Leader
                  name="Mark Andrew Walker"
                  designation="Chief Product Officer"
                  image="/images/about/leader/mark.jpg"
                  // linkedin="https://www.linkedin.com/in/harjeetsgulati/"
                  linkedin="https://www.linkedin.com/in/mark-andrew-walker/"
                  description={
                    <>
                      With over a decade scaling SaaS platforms and leading
                      cross-functional teams, Mark has driven double-digit
                      revenue growth through AI-driven innovations, operational
                      efficiency, and strategic market expansion. He excels in
                      launching solutions that boost client acquisition and
                      retention, significantly improving profitability, and
                      building high-performing product teams that deliver
                      impactful results in fast-paced, growth-focused technology
                      businesses globally.
                    </>
                  }
                  driection="right-bottom"
                />
              </div>
            </FadeUp>
          </Container>
        </div>
        <div
          className="lg:-mt-40 relative z-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)",
          }}
        >
          <div className="relative">
            {/* <Image
              src="/images/about/reimagine.jpg"
              alt="Reimagine"
              width={1440}
              height={607}
              className="w-full h-auto object-cover"
              quality={100}
            /> */}
            {/* <VideoVimeoIframe videoId="999430758" /> */}
            <VideoVimeoIframe videoId="1077191689" />
            {/* <iframe
              className="aspect-video w-full bg-white rounded-md"
              src="https://player.vimeo.com/video/999430758?autoplay=1&loop=1&autopause=0&background=1"
              width="100%"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
            ></iframe> */}
            <div className="absolute top-0 left-0 w-full h-full z-10">
              <span className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></span>
              <span
                className="absolute left-0 top-0 w-full h-full max-h-[10rem]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              ></span>
            </div>
            {/* <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 z-10 backdrop-blur-3xl"></div> */}
            <div className="px-5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center max-w-xl md:max-w-3xl lg:max-w-4xl text-white z-20">
              <Parallax startOffset={-50} endOffset={50}>
                <Typo
                  tag="h2"
                  size="h2"
                  weight="bold"
                  className="text-balance"
                  isTitle
                >
                  Reimagine what’s possible.  Create what’s next.
                </Typo>
              </Parallax>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background: "linear-gradient(180deg, #EEE 12.04%, #FFF 44.18%)",
        }}
      >
        <div className="md:pt-20 pt-10" id="ourvalues">
          <Container isSmall>
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-8">
                <FadeUp>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    className="text-balance"
                    isTitle
                  >
                    Values that Guide Our Journey
                  </Typo>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <Typo
                    tag="p"
                    size="lg"
                    className="text-pretty mt-4 leading-6"
                  >
                    Our values are more than statements—they are the principles
                    that define who we are, guide our decisions, and drive our
                    purpose. At Clarient, these values are the foundation of our
                    pursuit of excellence and innovation.
                  </Typo>
                </FadeUp>
              </div>
            </div>
            <div className="md:mt-20 pt-10 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <FadeUp
                  key={index}
                  delay={value.delay}
                  className="px-6 py-11 rounded-b-lg bg-white border border-[#E7E7E7] relative"
                  style={{
                    backdropFilter: "blur(0.281rem)",
                  }}
                >
                  <Typo
                    tag="p"
                    size="2xl"
                    className="text-pretty leading-none"
                    isTitle
                  >
                    {value.title}
                  </Typo>
                  <Typo
                    tag="p"
                    size="lg"
                    className="text-pretty mt-2 leading-6"
                  >
                    {value.description}
                  </Typo>
                  <div className="absolute w-full h-[0.313rem] bg-secondary left-0 top-0"></div>
                </FadeUp>
              ))}
            </div>
          </Container>
        </div>
        <div className="pt-20" id="csr">
          <Container isSmall>
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <FadeUp delay={0.2}>
                  <Typo
                    tag="h2"
                    size="h2"
                    weight="normal"
                    className="text-pretty text-secondary"
                    isTitle
                  >
                    We believe technology should drive progress and make the
                    world a better place. Creating an impact isn’t just about
                    what we build—it’s about how we give back.
                  </Typo>
                </FadeUp>
              </div>
              {/* <div className="col-span-8">
                <FadeUp delay={0.4}>
                  <Typo
                    tag="p"
                    size="lg"
                    className="text-pretty mt-4 leading-6"
                  >
                    Our values are more than statements—they are the principles
                    that define who we are, guide our decisions, and drive our
                    purpose. At Clarient, these values are the foundation of our
                    pursuit of excellence and innovation.
                  </Typo>
                </FadeUp>
              </div> */}
            </div>
            <div className="md:pt-16 pt-8 md:pb-20 pb-10 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-7">
                <div className="w-full grid md:grid-cols-12 gap-6">
                  <FadeUp
                    delay={0.2}
                    className="md:col-span-12 bg-[#F3F3FE] rounded-lg p-10 pb-0 pe-7"
                  >
                    <Typo
                      tag="h3"
                      size="h3"
                      weight="normal"
                      className="text-pretty"
                      isTitle
                    >
                      Sustainability
                    </Typo>
                    <Typo
                      tag="p"
                      size="lg"
                      className="text-pretty mt-2.5 leading-6 max-w-md"
                    >
                      Our Carbon Management Platform helps companies reduce
                      their environmental footprint.
                    </Typo>
                    <div className="flex justify-end items-end mt-12">
                      <Image
                        src="/images/about/sustainabilit.png"
                        alt="Sustainability"
                        width={386}
                        height={267}
                        className="max-w-full h-auto object-cover mix-blend-darken"
                        quality={100}
                      />
                    </div>
                  </FadeUp>
                  <div className="md:col-span-12">
                    <div className="grid md:grid-cols-12 w-full">
                      <div className="md:col-span-3"></div>
                      <FadeUp
                        delay={0.4}
                        className="bg-[#E0E2D3] rounded-lg p-10 pb-0 pe-7 md:col-span-9"
                      >
                        <Typo
                          tag="h3"
                          size="h3"
                          weight="normal"
                          className="text-pretty"
                          isTitle
                        >
                          Supporting Education
                        </Typo>
                        <Typo
                          tag="p"
                          size="lg"
                          className="text-pretty mt-2.5 leading-6"
                        >
                          As part of our commitment to giving back, we donate to
                          a nursing college to support aspiring healthcare
                          professionals in their journey.
                        </Typo>
                        <div className="flex justify-end items-end mt-6">
                          <Image
                            src="/images/about/supporting.jpg"
                            alt="Supporting"
                            width={231}
                            height={182}
                            className="max-w-full h-auto object-cover"
                            quality={100}
                          />
                        </div>
                      </FadeUp>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="grid md:grid-cols-12 gap-6">
                  <FadeUp
                    delay={0.3}
                    className="col-span-12 bg-[#F3F3F5] rounded-lg"
                  >
                    <div className="p-10 pb-9 pe-9">
                      <Typo
                        tag="h3"
                        size="h3"
                        weight="normal"
                        className="text-pretty"
                        isTitle
                      >
                        Diversity & Inclusion
                      </Typo>
                      <Typo
                        tag="p"
                        size="lg"
                        className="text-pretty mt-2.5 leading-6"
                      >
                        We foster an inclusive culture where every voice is
                        valued.
                      </Typo>
                    </div>
                    <div className="flex justify-end items-end">
                      <Image
                        src="/images/about/diversity.jpg"
                        alt="Diversity"
                        width={364}
                        height={254}
                        className="w-full h-auto object-cover"
                        quality={100}
                      />
                    </div>
                  </FadeUp>
                  <FadeUp
                    delay={0.5}
                    className="col-span-12 bg-[#EBF3FF] rounded-lg"
                  >
                    <div className="p-10 pb-4 pe-8">
                      <Typo
                        tag="h3"
                        size="h3"
                        weight="normal"
                        className="text-pretty"
                        isTitle
                      >
                        Community Impact
                      </Typo>
                      <Typo
                        tag="p"
                        size="lg"
                        className="text-pretty mt-2.5 leading-6"
                      >
                        Through mentorship, educational programs, and innovative
                        solutions, we strive to make a positive difference.
                      </Typo>
                    </div>
                    <div className="flex justify-end items-end">
                      <Image
                        src="/images/about/communityImpact.png"
                        alt="Sustainability"
                        width={356}
                        height={267}
                        className="max-w-full h-auto object-cover mix-blend-darken"
                        quality={100}
                      />
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section
        className="pt-20 bg-[#F5F5F5]"
        // style={{
        //   background: "linear-gradient(180deg, #ECECEC 45.19%, #FFFFFF 100%)",
        // }}
      >
        <Container isSmall>
          <ExcitingRole />
          <GetInTouch />
        </Container>
      </section>
    </>
  );
};

export default About;
