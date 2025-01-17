import { promises } from "fs";
import { join } from "path";
import { c as convertMarkdownToHtml } from "../../../chunks/markdown.js";
async function load() {
  const postsDirectory = join(process.cwd(), "src/content/blog");
  const posts = [];
  try {
    await promises.mkdir(postsDirectory, { recursive: true });
    const files = await promises.readdir(postsDirectory);
    for (const file of files) {
      if (file.endsWith(".md")) {
        const fullPath = join(postsDirectory, file);
        const content = await promises.readFile(fullPath, "utf8");
        const { content: htmlContent, frontmatter } = convertMarkdownToHtml(content);
        posts.push({
          slug: file.replace(/\.md$/, ""),
          content: htmlContent,
          frontmatter: {
            ...frontmatter,
            title: frontmatter?.title || file.replace(/\.md$/, "").replace(/-/g, " "),
            date: frontmatter?.date || (/* @__PURE__ */ new Date()).toISOString(),
            tags: frontmatter?.tags || [],
            description: frontmatter?.description || ""
          }
        });
      }
    }
    return {
      posts: posts.sort(
        (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      )
    };
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return {
      posts: []
    };
  }
}
export {
  load
};
