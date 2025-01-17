import { marked } from 'marked';
import matter from 'gray-matter';

export function convertMarkdownToHtml(markdown) {
  const { content, data } = matter(markdown);
  return {
    content: marked(content),
    frontmatter: data
  };
} 