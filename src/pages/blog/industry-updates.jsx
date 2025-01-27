import React from "react";
import BlogSectionOne from "../../components/blog/BlogSectionOne";
import Head from "../../components/Head";
import BlogHeader from "../../components/BlogHeader";
import { blogPosts } from "../../utils/data";
import { dateFormatter } from "../../utils/helpers";
import BlogSectionTwo from "../../components/blog/BlogSectionTwo";

const IndustryUpdatesPage = () => {
  const data = blogPosts.sort(
    (a, b) => dateFormatter(b.date) - dateFormatter(a.date)
  );
  console.log({ data });
  return (
    <>
      <Head pageTitle="Industry Updates" />
      <div className="w-[100vw] bg-titusDarkBG">
        <BlogHeader title="Industry Updates" />
        <div className="container pt-[19vh] md:pt-[200px] pb-[180px] md:pb-[200px] px-7 lg:px-0 flex flex-col gap-20">
          <BlogSectionOne post={data.slice(0, 1)[0]} />
          <BlogSectionTwo posts={data} />
        </div>
      </div>
    </>
  );
};

export default IndustryUpdatesPage;
