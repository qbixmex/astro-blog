export interface Post {
  frontmatter: {
    title: string;
    tags: string[];
  };
  url: string;
}
