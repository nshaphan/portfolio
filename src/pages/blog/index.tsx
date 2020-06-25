// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { rhythm } from '../../utils/typography';
import Bio from '../../components/bio';
import { Content, Article } from '../../utils/styles/blogStyles';

type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
};

const PostTitle = styled(Link)`
  ${tw`
    text-2xl
    text-purple-900
    hover:text-blue-400
  `}
`;

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Content>
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <PostTitle
                    style={{ boxShadow: `none` }}
                    to={node.fields.slug}
                  >
                    {title}
                  </PostTitle>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html:
                      node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </Article>
          );
        })}
      </Content>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
