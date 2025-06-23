// import { Banner, ContentPage } from "@/components";
import React from "react";
import ContentPage from "@/components/templates/ContentPage/ContentPage";
import { Address, CustomLink } from "@/components";
import BannerCMS from "@/components/molecules/BannerCMS/BannerCMS";
// seo
import type { Metadata } from "next";
import { privacyPolicySeo } from "@/data/seoData";
export const metadata: Metadata = privacyPolicySeo;
// end seo
const PrivacyPolicy = () => {
  return (
    <>
      <meta name="robots" content="noindex" />
      <BannerCMS
        title="Your Privacy Rights and Our Obligations"
        description="This Privacy Policy outlines the procedures Clarient follows in the collection, use, and protection of your personal data. It details your rights and the choices available to you concerning your data."
        date="Last updated on April 18, 2025"
      />
      <ContentPage
        cards={[
          {
            target: "sec-1",
            title: "Introduction",
            content: (
              <>
                <span className="block">
                  This Privacy Policy outlines how Clarient ("we", "our", or
                  "us") collects, uses, discloses, and protects your personal
                  data when you access or use our website, services, or
                  products. It also explains your rights and choices under U.S.
                  privacy laws, including the California Consumer Privacy Act
                  (CCPA), as amended by the California Privacy Rights Act
                  (CPRA), and other applicable federal and state regulations.
                </span>
                <span className="block">
                  By accessing or using our services, you agree to the
                  collection and use of your personal information in accordance
                  with this policy. If you have questions, please contact us at{" "}
                  <a
                    className="font-bold inline-block"
                    href="mailto:hello@clarient.us"
                  >
                    {/* legal@millipixels.com */}
                    hello@clarient.us
                  </a>
                  .
                </span>
              </>
            ),
          },

          {
            target: "sec-2",
            title: "Our Commitment to Privacy",
            content: (
              <>
                <span className="block">
                  Clarient is committed to safeguarding your personal data and
                  respecting your privacy rights. We implement robust security
                  practices and comply with applicable U.S. and international
                  data protection laws. This policy explains what information we
                  collect, how we use it, how we share it, and your rights in
                  managing your data.
                </span>
              </>
            ),
          },

          {
            target: "sec-3",
            title: "What Information Do We Collect?",
            content: (
              <>
                <span>
                  We may collect and process the following types of personal
                  information:
                </span>
                <b>Information You Provide Directly</b>
                <ul>
                  <li>
                    Name, email address, phone number, company name, job title,
                    or other identifiers when you fill out forms, download
                    content, contact us, or engage with our services.
                  </li>
                </ul>
                <b>Device and Technical Data</b>
                <ul>
                  <li>
                    IP address, browser type, device type, operating system,
                    referral source, and interactions with our website via
                    analytics tools and server logs.
                  </li>
                </ul>
                <b>Cookies and Tracking Technologies</b>
                <ul>
                  <li>
                    We use cookies, pixels, and similar technologies to improve
                    functionality, understand user behavior, and personalize
                    experiences. For more details, please refer to our{" "}
                    <CustomLink
                      className="!inline-block font-bold"
                      href="/cookie-policy"
                    >
                      Cookie Policy
                    </CustomLink>
                    .
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-4",
            title: "How Do We Use Your Information?",
            content: (
              <>
                <span>We use the collected data to:</span>
                <ul>
                  <li>
                    Provide and optimize our products, services, and content.
                  </li>
                  <li>
                    Personalize your experience based on location and
                    preferences.
                  </li>
                  <li>
                    Communicate with you regarding product updates, promotions,
                    and service-related notices.
                  </li>
                  <li>Comply with legal obligations.</li>
                  <li>Prevent fraud, abuse, and security incidents.</li>
                  <li>
                    Conduct analytics and research to improve our website and
                    offerings.
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-5",
            title: "When Do We Share Your Information?",
            content: (
              <>
                We do not sell your personal information. We may share it under
                these circumstances:
                <ul>
                  <li>
                    <b className="!inline-block">With Your Consent</b> - When
                    you opt in to communications or third-party events.
                  </li>
                  <li>
                    <b className="!inline-block">Legal Requirements</b> - If
                    required to comply with law, legal process, or government
                    request.
                  </li>
                  <li>
                    <b className="!inline-block">Business Transfers</b> - In the
                    event of a merger, acquisition, or asset sale.
                  </li>
                  <li>
                    <b className="!inline-block">Third-Party Partners</b> - When
                    you register for a co-branded or sponsored event, your data
                    may be shared with the partner. You can opt out of
                    third-party communication at any time.
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-6",
            title: "Cookies and Tracking Technologies",
            content: (
              <>
                <span>
                  We use cookies and similar tools to enhance your browsing
                  experience and analyze traffic patterns. Please refer to our{" "}
                  <CustomLink
                    href="/cookie-policy"
                    className="!inline-block font-bold"
                  >
                    Cookie Policy
                  </CustomLink>{" "}
                  for detailed information on types of cookies used and how to
                  manage them.
                </span>
              </>
            ),
          },
          {
            target: "sec-7",
            title: "Third-Party Links",
            content: (
              <>
                Our website may contain links to third-party services. These
                sites operate independently and have their own privacy policies.
                We are not responsible for the practices or content of
                third-party websites.
              </>
            ),
          },
          {
            target: "sec-8",
            title: "How Do We Protect Your Information?",
            content: (
              <>
                Clarient implements a multi-layered security framework,
                including:
                <ul>
                  <li>
                    <b className="!inline-block">SSL encryption</b> for data in
                    transit.
                  </li>
                  <li>
                    <b className="!inline-block">Access control</b> measures to
                    limit data access to authorized personnel.
                  </li>
                  <li>
                    <b className="!inline-block">
                      Regular vulnerability assessments and monitoring
                    </b>{" "}
                    to prevent unauthorized access.
                  </li>
                  <li>
                    <b className="!inline-block">Employee training and NDAs</b>{" "}
                    to protect confidential data.
                  </li>
                </ul>
                Despite these measures, no digital transmission or storage
                system is 100% secure. If you believe your data has been
                compromised, please contact us immediately.
              </>
            ),
          },
          {
            target: "sec-9",
            title: "Email Communication Management",
            content: (
              <>
                We may contact you based on interactions such as signing up for
                resources, demos, or newsletters. Every communication includes
                an unsubscribe link. You can also manage preferences by
                contacting us directly.
              </>
            ),
          },
          {
            target: "sec-10",
            title: "Your Rights Under U.S. Privacy Laws",
            content: (
              <>
                Depending on your state of residence (such as California,
                Virginia, Colorado, Connecticut, or Utah), you may have the
                following rights:
                <ul>
                  <li>
                    <b className="!inline-block">Right to Know</b> - Access the
                    personal information we collect, use, and share.
                  </li>
                  <li>
                    <b className="!inline-block">Right to Delete</b> - Request
                    deletion of your personal data.
                  </li>
                  <li>
                    <b className="!inline-block">Right to Correct</b> - Request
                    correction of inaccurate data.
                  </li>
                  <li>
                    <b className="!inline-block">Right to Opt Out</b> - Opt out
                    of certain data sharing or targeted advertising.
                  </li>
                  <li>
                    <b className="!inline-block">Right to Non-Discrimination</b>{" "}
                    - You won’t be discriminated against for exercising your
                    privacy rights.
                  </li>
                </ul>
                <span className="block">
                  To exercise any of these rights, contact us at{" "}
                  <a href="mailto:hello@clarient.us">hello@clarient.us</a>.
                </span>
                <span>
                  We will verify your identity before processing any
                  rights-based request and respond within legally required
                  timeframes.
                </span>
              </>
            ),
          },
          {
            target: "sec-11",
            title: "Children’s Privacy",
            content: (
              <>
                Clarient does not knowingly collect personal information from
                children under 13, in compliance with the Children’s Online
                Privacy Protection Act (COPPA). If you are a parent or guardian
                and believe your child has provided personal data without your
                consent, please contact us. We will promptly delete such data.
              </>
            ),
          },
          {
            target: "sec-12",
            title: "Fair Information Practices & Breach Notification",
            content: (
              <>
                <span className="block">
                  We follow the{" "}
                  <b className="!inline-block">
                    Fair Information Practice Principles
                  </b>
                  , including:
                </span>
                <ul>
                  <li>
                    <b className="!inline-block">Breach Notification</b> - In
                    the event of a data breach, we will notify affected users
                    via email within <b className="!inline-block">72 hours</b>{" "}
                    where feasible.
                  </li>
                  <li>
                    <b className="!inline-block">Remediation</b> - Immediate
                    steps will be taken to secure data and prevent recurrence.
                  </li>
                  <li>
                    <b className="!inline-block">Redress Options</b> - You have
                    the right to file complaints with regulatory bodies or
                    pursue legal remedies for privacy violations.
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-13",
            title: "CAN-SPAM Compliance",
            content: (
              <>
                <span className="block">
                  We comply with the{" "}
                  <b className="!inline-block">CAN-SPAM Act</b>, which governs
                  commercial email practices:
                </span>
                <ul>
                  <li>Clear identification of promotional content.</li>
                  <li>No misleading subject lines or sender information.</li>
                  <li>Inclusion of a physical business address.</li>
                  <li>Easy opt-out options in all marketing emails.</li>
                  <li>Prompt removal of users who unsubscribe.</li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-14",
            title: "Contact Us",
            content: (
              <>
                <span>
                  If you have any questions, concerns, or wish to exercise your
                  rights, please reach out to us at:
                </span>
                <b>Executive Headquarters</b>
                <span>
                  Clarient Systems Corporation (A Delaware Corporation)
                  <br />
                  <Address />
                </span>
                <span>
                  <p>
                    E
                    <a
                      className="font-bold ms-1"
                      href="mailto:hello@clarient.us"
                    >
                      hello@clarient.us
                    </a>
                  </p>
                </span>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default PrivacyPolicy;
