import PostCategories, {
  Props as PostCategoriesProps,
} from "../../molecules/PostCategories/PostCategories";
// import BlogPost, {
//   Props as BlogPostProps,
// } from "../../molecules/BlogPost/BlogPost";
import React from "react";
import { twMerge } from "tailwind-merge";
import BlogPost, {
  Props as BlogPostProps,
} from "@/components/molecules/BlogPost/BlogPost";

export type Props = {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  catagory: PostCategoriesProps;
  // cards: BlogPostProps[];
  // cards: CardProps[];
  cards: BlogPostProps[];
};
const ThoughtstreamSection: React.FC<Props> = ({
  catagory,
  cards,
  className,
  ...props
}) => {
  return (
    <div className={twMerge(`pt-8`, className)} {...props}>
      <div className="container">
        <div className="grid md:grid-cols-12 gap-11">
          <div className="md:col-span-5">
            <PostCategories className="sticky top-36 pt-12" {...catagory} />
          </div>
          <div className="md:col-span-7">
            <div className="lg:columns-2 gap-x-7">
              {cards.map((card, index) => (
                <div key={index} className="inline-block pt-12">
                  <BlogPost {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtstreamSection;
