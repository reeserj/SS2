import { promises as fs } from 'fs';
import { join } from 'path';
import { convertMarkdownToHtml } from '$lib/utils/markdown';

export async function load() {
  const postsDirectory = join(process.cwd(), 'src/content/blog');
  const posts = [];

  try {
    // Create directory if it doesn't exist
    await fs.mkdir(postsDirectory, { recursive: true });
    
    const files = await fs.readdir(postsDirectory);
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const fullPath = join(postsDirectory, file);
        const content = await fs.readFile(fullPath, 'utf8');
        const { content: htmlContent, frontmatter } = convertMarkdownToHtml(content);
        
        posts.push({
          slug: file.replace(/\.md$/, ''),
          content: htmlContent,
          frontmatter: {
            ...frontmatter,
            title: frontmatter?.title || file.replace(/\.md$/, '').replace(/-/g, ' '),
            date: frontmatter?.date || new Date().toISOString(),
            tags: frontmatter?.tags || [],
            description: frontmatter?.description || ''
          }
        });
      }
    }

    return {
      posts: posts.sort((a, b) => 
        new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
      )
    };
  } catch (error) {
    console.error('Error loading blog posts:', error);
    // Return empty posts array instead of throwing error
    return {
      posts: []
    };
  }
} 