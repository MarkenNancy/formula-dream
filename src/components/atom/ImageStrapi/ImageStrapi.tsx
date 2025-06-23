import { getStrapiMedia } from "@/utils";
import Image from "next/image";
import { FC } from "react";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  url: string;
  alternativeText: string;
  width: number;
  height: number;
  fill?: boolean;
  objectFit?: string;
  objectPosition?: string;
  quality?: number;
  documentId?: string;
  id: string;
};

const ImageStrapi: FC<Props> = ({
  id,
  url,
  alternativeText,
  fill,
  width,
  height,
  quality = 75,
  className,
  style,
}) => {
  const imageUrl = getStrapiMedia(url) ?? "";
  if (fill) {
    return (
      <Image
        id={id}
        src={imageUrl}
        alt={alternativeText ? alternativeText : `image ${id}`}
        fill
        quality={quality}
        // placeholder="blur"
        // blurDataURL="/images/blurFiller.jpg"
        priority
        style={style}
        className={className}
      />
    );
  }
  return (
    <Image
      id={id}
      src={imageUrl}
      alt={alternativeText ? alternativeText : `image ${id}`}
      width={width}
      height={height}
      quality={quality}
      // placeholder="blur"
      // blurDataURL="/images/blurFiller.jpg"
      priority
      style={style}
      className={className}
    />
  );
};

export default ImageStrapi;
