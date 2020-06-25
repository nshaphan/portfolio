export interface Post {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: Date;
    title: string;
    description: string;
  };
  html: string;
}

export interface Posts {
  node: Post;
}
