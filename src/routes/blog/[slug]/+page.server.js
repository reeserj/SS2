import { promises as fs } from 'fs';
import { join } from 'path';
import { convertMarkdownToHtml } from '$lib/utils/markdown';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const { slug } = params;
  const postsDirectory = join(process.cwd(), 'src/content/blog');

  try {
    const fullPath = join(postsDirectory, `${slug}.md`);
    const content = await fs.readFile(fullPath, 'utf8');
    const { content: htmlContent, frontmatter } = convertMarkdownToHtml(content);

    return {
      post: {
        slug,
        content: htmlContent,
        frontmatter: {
          ...frontmatter,
          title: frontmatter?.title || slug.replace(/-/g, ' '),
          date: frontmatter?.date || new Date().toISOString(),
          tags: frontmatter?.tags || [],
          description: frontmatter?.description || ''
        }
      }
    };
  } catch (e) {
    throw error(404, `Blog post not found`);
  }
} 