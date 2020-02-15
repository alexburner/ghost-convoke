import { NextPage } from "next";
import { RichText } from "prismic-reactjs";

import { getPage, Page } from "../util/prismic";

const Work: NextPage<{ page: Page }> = ({ page }) => {
  console.log(page.body);
  const html = RichText.render(page.body);
  console.log(html);
  return <>{html}</>;
};

Work.getInitialProps = async () => {
  const page = await getPage("work");
  if (!page) throw new Error("Couldn't find work page");
  return { page };
};

export default Work;