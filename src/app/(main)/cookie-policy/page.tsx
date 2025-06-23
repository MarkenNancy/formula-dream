import React from "react";
// import { Banner, ContentPage } from "@/components";
import ContentPage from "@/components/templates/ContentPage/ContentPage";
// seo
import type { Metadata } from "next";
import { cookiePolicySeo } from "@/data/seoData";
import BannerCMS from "@/components/molecules/BannerCMS/BannerCMS";
import { Address, CustomLink } from "@/components";
export const metadata: Metadata = cookiePolicySeo;
// end seo
const CookiePolicy = () => {
  return (
    <>
      <meta name="robots" content="noindex" />
      <BannerCMS
        title="Cookies and Data Protection Under GDPR"
        description="This page explains Clarient’s use of cookies and our compliance with GDPR regulations. It provides details on how your data is processed, stored, and protected in accordance with your rights."
        date="Last updated on April 18, 2025"
      />
      <ContentPage
        description={
          <>
            <span>
              This Cookie & Compliance Policy explains how Clarient, Inc. ("we",
              "us", or "our") uses cookies and other tracking technologies on
              our websites, products, and services. It also outlines your
              choices under U.S. state privacy laws (e.g., CCPA/CPRA) and the
              EU’s General Data Protection Regulation (GDPR), where applicable.
            </span>
            <span>
              By continuing to use our website, you consent to the placement of
              cookies as described in this policy and in our{" "}
              <CustomLink
                className="!inline-block font-bold"
                href="/privacy-policy"
              >
                Privacy Policy
              </CustomLink>
              .
            </span>
          </>
        }
        cards={[
          {
            target: "sec-1",
            title: "Does Clarient Use Cookies?",
            content: (
              <>
                <span>
                  Yes. We use cookies and similar tracking technologies to
                  improve your experience, ensure security, support
                  personalization, and enable performance analytics across our
                  digital properties.
                </span>
              </>
            ),
          },

          {
            target: "sec-2",
            title: "What Are Cookies?",
            content: (
              <>
                <span>
                  Cookies are small data files placed on your device to help us
                  identify your browser or device and store preferences. Cookies
                  enable us to:
                </span>
                <ul>
                  <li>Provide secure access to our services.</li>
                  <li>Personalize your browsing experience.</li>
                  <li>Track and understand site usage and performance.</li>
                  <li>
                    Deliver relevant ads based on your preferences and behavior.
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-3",
            title: "When Does Clarient Place Cookies?",
            content: (
              <>
                <span>
                  We place cookies when you visit our websites or use our
                  products. Cookies are applied to any browser that accesses{" "}
                  <CustomLink href="/" className="!inline-block font-bold">
                    clarient.us
                  </CustomLink>{" "}
                  or any subdomains associated with our services or tools.
                </span>
              </>
            ),
          },
          {
            target: "sec-4",
            title: "What Types of Cookies Does Clarient Use?",
            content: (
              <>
                <span>
                  We use both <b className="!inline-block">session cookies</b>{" "}
                  and <b className="!inline-block">persistent cookies</b>:
                </span>
                <ul>
                  <li>
                    <b className="!inline-block">Session Cookies:</b> Temporary
                    cookies that expire when you close your browser. They
                    support real-time functionality during your visit.
                  </li>
                  <li>
                    <b className="!inline-block">Persistent Cookies:</b> Stored
                    on your device for a defined period and help us recognize
                    returning visitors.
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-5",
            title: "What Are Cookies Used For?",
            content: (
              <>
                <b>Categories of Use:</b>
                <ul>
                  <li>
                    <b className="!inline-block">Authentication</b> To identify
                    you securely when you log in and personalize your dashboard.
                  </li>
                  <li>
                    <b className="!inline-block">Security</b> To detect abuse,
                    fraud, and enforce site integrity.
                  </li>
                  <li>
                    <b className="!inline-block">Preferences and Features</b> To
                    store settings such as preferred language and content
                    layout.
                  </li>
                  <li>
                    <b className="!inline-block">Advertising</b> To serve you
                    relevant ads across platforms, including behavior-based
                    targeting.
                  </li>
                  <li>
                    <b className="!inline-block">Analytics and Performance</b>{" "}
                    To measure usage patterns, test features, and improve
                    performance.
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-6",
            title: "What Is Do Not Track (DNT)?",
            content: (
              <>
                <span>
                  DNT is a browser setting that signals your preference not to
                  be tracked across websites. However, there is currently{" "}
                  <b className="!inline">no universally accepted standard</b>{" "}
                  for how DNT signals should be interpreted. As such, Clarient{" "}
                  <b className="!inline">does not respond to DNT signals</b> at
                  this time.
                </span>
              </>
            ),
          },
          {
            target: "sec-7",
            title: "How Are Cookies Used for Advertising Purposes?",
            content: (
              <>
                <span>We use cookies, pixels, and tags to:</span>
                <ul>
                  <li>
                    Serve interest-based ads (on Clarient platforms and
                    third-party sites).
                  </li>
                  <li>Measure ad performance, conversions, and engagement.</li>
                  <li>
                    Enable retargeting through platforms like Google Ads,
                    LinkedIn, and Meta.
                  </li>
                  <li>
                    Generate aggregate reports on ad performance and user
                    engagement.
                  </li>
                </ul>
                <span>
                  Third-party partners may also use cookies for these purposes.
                  You can opt out of targeted advertising as described in the{" "}
                  <b className="!inline-block">Controlling Cookies</b> section
                  below.
                </span>
              </>
            ),
          },
          {
            target: "sec-8",
            title: "What Third-Party Cookies Does Clarient Use?",
            content: (
              <>
                <span>
                  We may allow select partners to place cookies via our
                  services, including:
                </span>
                <ul>
                  <li>
                    <b className="!inline-block">Analytics Providers</b> (e.g.,
                    Google Analytics, Hotjar) – for measuring usage and
                    performance.
                  </li>
                  <li>
                    <b className="!inline-block">Advertising Partners</b> (e.g.,
                    Google Ads, LinkedIn) – for retargeting and attribution.
                  </li>
                  <li>
                    <b className="!inline-block">Social Media Platforms</b>{" "}
                    (e.g., Twitter, Meta) – to enable sharing or login
                    integrations.
                  </li>
                </ul>
                <span>
                  These third parties may change over time. For the latest list
                  or questions, contact{" "}
                  <CustomLink
                    href="mailto:hello@clarient.us"
                    className="!inline-block font-bold"
                  >
                    hello@clarient.us
                  </CustomLink>
                </span>
              </>
            ),
          },
          {
            target: "sec-9",
            title: "Controlling Cookies",
            content: (
              <>
                <b>You have multiple options to control cookies:</b>
                <ul>
                  <li>
                    <b>Browser Settings:</b>
                    Most modern browsers allow you to:
                    <ul>
                      <li>Block third-party cookies.</li>
                      <li>Clear all existing cookies.</li>
                      <li>Set up cookie warnings.</li>
                    </ul>
                    Disabling cookies may limit certain functionality, such as
                    saved logins or personalized settings.
                  </li>
                  <li>
                    <b>Opt-Out of Targeted Ads:</b>
                    <ul>
                      <li>Network Advertising Initiative (NAI)</li>
                      <li>Digital Advertising Alliance (DAA)</li>
                      <li>
                        <CustomLink
                          isExternal
                          href="https://youradchoices.com/"
                        >
                          YourAdChoices
                        </CustomLink>
                      </li>
                      <li>
                        <CustomLink
                          isExternal
                          href="https://adssettings.google.com/"
                        >
                          Google Ad Settings
                        </CustomLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Mobile Device Settings:</b>
                    <ul>
                      <li>
                        Mobile OS platforms (iOS, Android) allow you to limit ad
                        tracking or reset your advertising identifier.
                      </li>
                    </ul>
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-10",
            title: "What to Do if You Don’t Want Cookies?",
            content: (
              <>
                <span>If you prefer not to receive cookies:</span>
                <ul>
                  <li>
                    Adjust your{" "}
                    <b className="!inline-block">browser settings</b> to block
                    cookies or notify you when one is set.
                  </li>
                  <li>
                    Use <b className="!inline-block">private browsing modes</b>.
                  </li>
                  <li>Clear cookies after each session.</li>
                  <li>
                    Use <b className="!inline-block">browser extensions</b> for
                    enhanced privacy control.
                  </li>
                </ul>
                <span>
                  Please note: blocking cookies may affect your ability to log
                  in, access content, or retain settings.
                </span>
              </>
            ),
          },
          {
            target: "sec-11",
            title: "Other Helpful Resources for Advertisers",
            content: (
              <>
                <span>
                  For additional information about how advertisers use cookies
                  and how you can manage your preferences, refer to:
                </span>
                <ul>
                  <li>
                    <CustomLink
                      href="https://www.networkadvertising.org/"
                      isExternal
                    >
                      Network Advertising Initiative (US)
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink href="https://www.aboutads.info/" isExternal>
                      Digital Advertising Alliance (US)
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink
                      href="https://www.youronlinechoices.com/"
                      isExternal
                    >
                      European Interactive Digital Advertising Alliance (EU)
                    </CustomLink>
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-12",
            title: "Contacting Us",
            content: (
              <>
                <span>
                  We’re committed to transparency and helping you manage your
                  cookie and tracking preferences. If you have any questions not
                  addressed in this policy, please contact:
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

export default CookiePolicy;
