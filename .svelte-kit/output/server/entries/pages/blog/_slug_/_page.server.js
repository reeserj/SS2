import { promises } from "fs";
import { join } from "path";
import { c as convertMarkdownToHtml } from "../../../../chunks/markdown.js";
import { e as error } from "../../../../chunks/index.js";
async function load({ params }) {
  const { slug } = params;
  const postsDirectory = join(process.cwd(), "src/content/blog");
  try {
    const fullPath = join(postsDirectory, `${slug}.md`);
    const content = await promises.readFile(fullPath, "utf8");
    const { content: htmlContent, frontmatter } = convertMarkdownToHtml(content);
    return {
      post: {
        slug,
        content: htmlContent,
        frontmatter: {
          ...frontmatter,
          title: frontmatter?.title || slug.replace(/-/g, " "),
          date: frontmatter?.date || (/* @__PURE__ */ new Date()).toISOString(),
          tags: frontmatter?.tags || [],
          description: frontmatter?.description || ""
        }
      }
    };
  } catch (e) {
    throw error(404, `Blog post not found`);
  }
}
export {
  load
};
