import React from "react";
import Image from "next/image";
import Typo from "../Typo/Typo";

const ImageGallery = () => {
  return (
    <div className="grid md:grid-cols-12">
      <div className="md:col-span-3 grid grid-cols-12 gap-3 md:pb-0 pb-3">
        <div className="md:col-span-12 sm:col-span-6 col-span-12 md:pt-24 pt-5 md:pb-4">
          <Typo
            tag="h2"
            size="h2"
            weight="normal"
            className="text-pretty"
            isTitle
          >
            Life at
            <br /> Clarient
          </Typo>
        </div>
        <div className="md:col-span-12 sm:col-span-6 col-span-12 md:pe-3">
          <Image
            src="/images/careers/gallery/2.png"
            alt="blogVideo-1"
            width={427}
            height={329}
            className="w-full h-auto object-cover ms-auto md:max-w-full max-w-[75%] rounded max-md:ps-20"
            quality={100}
          />
        </div>
      </div>
      <div className="md:col-span-9 grid grid-cols-12 gap-3">
        <div className="col-span-9 gap-5">
          <div className="grid grid-col-2 pb-2">
            <div className="col-start-3">
              <Image
                src="/images/careers/gallery/1.png"
                alt="blogVideo-1"
                width={249}
                height={310}
                className="w-full h-auto object-cover max-w-full rounded"
                quality={100}
              />
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-3">
            <div className="col-span-4 h-full">
              <Image
                src="/images/careers/gallery/4.png"
                alt="blogVideo-1"
                width={208}
                height={218}
                className="w-full h-full object-cover rounded"
                quality={100}
              />
            </div>
            <div className="col-span-8 h-full">
              <Image
                src="/images/careers/gallery/5.png"
                alt="blogVideo-1"
                width={390}
                height={218}
                className="w-full h-full object-cover rounded"
                quality={100}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 pt-3">
            <div className="col-span-6">
              <Image
                src="/images/careers/gallery/round.png"
                alt="blogVideo-1"
                width={249}
                height={249}
                className="w-full h-auto max-w-[80%] object-cover mx-auto rounded"
                quality={100}
              />
            </div>
            <div className="col-span-6">
              <Image
                src="/images/careers/gallery/6.png"
                alt="blogVideo-1"
                width={310}
                height={249}
                className="w-full h-auto object-cover rounded"
                quality={100}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 pt-3 overflow-hidden">
            <Image
              src="/images/careers/gallery/9.png"
              alt="blogVideo-1"
              width={312}
              height={346}
              className="w-full h-auto object-cover lg:max-w-full max-w-[80%] ms-auto lg:mx-auto rounded"
              quality={100}
            />
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 gap-3">
            <Image
              src="/images/careers/gallery/3.png"
              alt="blogVideo-1"
              width={233}
              height={410}
              className="w-full h-auto object-cover rounded"
              quality={100}
            />
            <Image
              src="/images/careers/gallery/7.png"
              alt="blogVideo-1"
              width={181}
              height={190}
              className="w-full h-auto object-cover rounded"
              quality={100}
            />
            <Image
              src="/images/careers/gallery/8.png"
              alt="blogVideo-1"
              width={238}
              height={189}
              className="w-full h-auto max-w-full object-cover rounded"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
