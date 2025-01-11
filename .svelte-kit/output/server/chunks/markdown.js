import { marked } from "marked";
import matter from "gray-matter";
function convertMarkdownToHtml(markdown) {
  const { content, data } = matter(markdown);
  return {
    content: marked(content),
    frontmatter: data
  };
}
export {
  convertMarkdownToHtml as c
};
