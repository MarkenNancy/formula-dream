import React from "react";
import { Container, CustomLink, Typo } from "@/components";
import Header from "@/components/molecules/Header/Header";
import FooterBottom from "@/components/molecules/Footer/FooterBottom";

const NotFound = () => {
  return (
    <>
      <Header className="bg-[#03020D] !bg-opacity-100" />
      <main
        className="lg:pt-28 pt-10"
        style={{
          background: "linear-gradient(180deg, #FFF -20.95%, #ECECEC 70.55%)",
        }}
      >
        <section className="page404 py-24 bg-no-repeat max-md:bg-[length:16.875rem] min-h-[calc(100vh-13rem)] lg:min-h-[calc(100vh-15.25rem)] bg-right-bottom bg-[url(/images/notfound-bg.png)] flex justify-center flex-col">
          <Container>
            <div className="grid md:grid-cols-12">
              <div className="xl:col-span-5 md:col-span-8">
                <Typo
                  tag="h1"
                  size="h1"
                  weight="bold"
                  className="text-balance leading-none"
                >
                  404 Error
                </Typo>
                <Typo
                  tag="p"
                  size="2xl"
                  weight="bold"
                  className="text-pretty md:mt-10 mt-6"
                >
                  Oops! This page isn’t where it used to be.
                </Typo>
              </div>
            </div>
            <div className="grid md:grid-cols-12">
              <div className="xl:col-span-4 md:col-span-6">
                <ul className="list-disc ps-4 md:mt-8 mt-4">
                  <li className="text-sm md:text-base lg:text-lg">
                    Use your browser’s “Back” button to return to the previous
                    page.
                  </li>
                  <li className="md:mt-3 mt-2 text-sm md:text-base lg:text-lg">
                    Or head back to the Clarient{" "}
                    <CustomLink
                      href="/"
                      className="inline-block text-secondary font-bold"
                    >
                      Home
                    </CustomLink>{" "}
                    page
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <footer>
        <FooterBottom />
      </footer>
    </>
  );
};

export default NotFound;
