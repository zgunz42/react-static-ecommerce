// import React from "react";
import unified from "unified";
import parse from "remark-parse";
import mdxMetadata from "remark-mdx-metadata";
import remark2react from "remark-react";

export default function createMdxElement(content, meta) {
  return unified()
    .use(parse)
    // .use(mdxMetadata, {
    //   meta: {
    //     ...meta,
    //     lastEdited: `${new Date().toISOString()}`
    //   }
    // })
    .use(remark2react)
    .processSync(content).result
}
