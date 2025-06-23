// import { Banner, ContentPage } from "@/components";
import React from "react";
import ContentPage from "@/components/templates/ContentPage/ContentPage";
// seo
import type { Metadata } from "next";
import { termsConditionsSeo } from "@/data/seoData";
import BannerCMS from "@/components/molecules/BannerCMS/BannerCMS";
import { Address } from "@/components";
export const metadata: Metadata = termsConditionsSeo;
// end seo
const TermsConditions = () => {
  return (
    <>
      <meta name="robots" content="noindex" />
      <BannerCMS
        title="Terms Governing Your Use of Our Services"
        description="The following Terms of Use govern your access to and use of Clarient's services. By engaging with our platform, you agree to comply with these terms and conditions."
        date="Last updated on April 18, 2025"
      />
      <ContentPage
        description={
          <>
            These Terms of Use (“Terms”) govern your access to and use of
            Clarient’s website and services (“Website”, “Service”, “we”, “our”,
            or “us”). By using our Website or Services, you agree to be bound by
            these Terms. If you do not agree with any part of these Terms, you
            must stop using the Website immediately.
          </>
        }
        cards={[
          {
            target: "sec-1",
            title: "Introduction",
            content: (
              <>
                <span>
                  Clarient provides access to its Website and services under the
                  condition that you accept and comply with these Terms. These
                  Terms apply to all visitors, users, and others who access or
                  use the Website.
                </span>
                <span>
                  By using this Website, you represent that you are at least 18
                  years old, or accessing the site under the supervision of a
                  parent or legal guardian.
                </span>
              </>
            ),
          },
          {
            target: "sec-2",
            title: "Intellectual Property Rights",
            content: (
              <>
                <span>
                  Except where otherwise stated, all intellectual property on
                  this Website—including text, images, logos, video, design
                  elements, and software—is the property of Clarient or its
                  licensors. These materials are protected by applicable
                  intellectual property laws in the United States and
                  internationally.
                </span>
                <span>
                  You are granted a limited, non-exclusive, non-transferable
                  license to access and view the Website content solely for
                  personal, non-commercial purposes.
                </span>
              </>
            ),
          },
          {
            target: "sec-3",
            title: "Restrictions",
            content: (
              <>
                <span>
                  Unless expressly permitted by Clarient, you agree not to:
                </span>
                <ul>
                  <li>
                    Republish, distribute, or commercially exploit any content
                    from the Website.
                  </li>
                  <li>Sell, rent, or sublicense Website materials.</li>
                  <li>
                    Publicly display content for commercial purposes without
                    written consent.
                  </li>
                  <li>
                    Modify, reverse engineer, or create derivative works based
                    on our software or content.
                  </li>
                  <li>
                    Interfere with other users' access or functionality of the
                    Website.
                  </li>
                  <li>
                    Use the Website in any way that violates applicable laws or
                    regulations.
                  </li>
                  <li>
                    Attempt unauthorized access to systems, data, or networks
                    connected to the Website.
                  </li>
                  <li>
                    Use the Website for spamming, phishing, or any form of
                    solicitation.
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-4",
            title: "Your Content",
            content: (
              <>
                <span>
                  “Your Content” refers to any text, files, images, audio,
                  video, or other material submitted by you to the Website.
                </span>
                <span>
                  By posting or uploading Your Content, you grant Clarient a{" "}
                  <b className="!inline">
                    non-exclusive, worldwide, perpetual, irrevocable,
                    royalty-free, sublicensable license
                  </b>{" "}
                  to use, reproduce, adapt, publish, distribute, and display
                  such content in connection with our Services. You represent
                  that Your Content does not violate any applicable laws or
                  infringe on the rights of any third party.
                </span>
                <span>
                  We reserve the right to remove any content that, in our sole
                  judgment, violates these Terms or is otherwise objectionable.
                </span>
              </>
            ),
          },
          {
            target: "sec-5",
            title: "No Warranties",
            content: (
              <>
                <span>
                  This Website is provided “as is” and “as available.” Clarient
                  makes no warranties or representations, express or implied,
                  about:
                </span>
                <ul>
                  <li>
                    The accuracy, reliability, or completeness of the Website
                    content.
                  </li>
                  <li>
                    The availability, security, or performance of the Website.
                  </li>
                  <li>
                    That the Website will be error-free, uninterrupted, or
                    virus-free.
                  </li>
                </ul>
                <span>
                  To the fullest extent permitted by law, Clarient disclaims all
                  implied warranties, including warranties of merchantability,
                  fitness for a particular purpose, and non-infringement.
                </span>
              </>
            ),
          },
          {
            target: "sec-6",
            title: "Limitation of Liability",
            content: (
              <>
                <span>
                  To the maximum extent permitted under applicable law, Clarient
                  and its officers, directors, employees, partners, and
                  affiliates shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including but not
                  limited to:
                </span>
                <ul>
                  <li>Loss of profits, revenue, or data.</li>
                  <li>Business interruption.</li>
                  <li>
                    Personal injury or property damage arising from your use of
                    the Website.
                  </li>
                </ul>
                <span>
                  This limitation applies whether the claim is based in
                  contract, tort, negligence, strict liability, or
                  otherwise—even if Clarient has been advised of the possibility
                  of such damage.
                </span>
              </>
            ),
          },
          {
            target: "sec-7",
            title: "Indemnification",
            content: (
              <>
                <span>
                  You agree to defend, indemnify, and hold harmless Clarient,
                  its affiliates, officers, directors, employees, and agents
                  from and against any claims, damages, obligations, losses,
                  liabilities, costs, or expenses (including legal fees) arising
                  from:
                </span>
                <ul>
                  <li>Your use of or access to the Website.</li>
                  <li>Your violation of these Terms.</li>
                  <li>
                    Your violation of any third-party rights, including
                    intellectual property or privacy rights.
                  </li>
                </ul>
              </>
            ),
          },
          {
            target: "sec-8",
            title: "Governing Law and Jurisdiction ",
            content: (
              <>
                <span>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the{" "}
                  <b className="!inline">State of Delaware,</b> without regard
                  to its conflict of law provisions.
                </span>
                <span>
                  Any disputes arising out of or related to your use of the
                  Website or Services shall be subject to the exclusive
                  jurisdiction of the{" "}
                  <b className="!inline">
                    state and federal courts located in New York County, New
                    York,
                  </b>{" "}
                  and you hereby consent to the personal jurisdiction and venue
                  of such courts.
                </span>
              </>
            ),
          },
          {
            target: "sec-9",
            title: "Severability",
            content: (
              <>
                <span>
                  If any provision of these Terms is held to be unlawful, void,
                  or unenforceable, that provision shall be deemed severable
                  from these Terms and will not affect the validity or
                  enforceability of the remaining provisions.
                </span>
              </>
            ),
          },
          {
            target: "sec-10",
            title: "Changes to These Terms",
            content: (
              <>
                <span>
                  Clarient reserves the right to modify these Terms at any time.
                  Updates will be posted on this page with a new “Last Updated”
                  date. Your continued use of the Website constitutes acceptance
                  of the updated Terms.
                </span>
              </>
            ),
          },
          {
            target: "sec-11",
            title: "Contacting Us",
            content: (
              <>
                <span>
                  If you have any questions or concerns regarding these Terms,
                  please contact us at:
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

export default TermsConditions;
