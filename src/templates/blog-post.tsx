/* eslint-disable react/no-danger */
import React from 'react';
import { Link, graphql } from 'gatsby';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import Img from 'gatsby-image';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import { Post } from '../interfaces/Post';
import { Content, Article } from '../utils/styles/blogStyles';

interface Props {
  data: {
    markdownRemark: Post;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: {
    next: Post;
    previous: Post;
  };
  location: Location;
}
const BlogPostTemplate = ({ data, pageContext, location }: Props) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  const PostTitle = styled.div`
    ${tw`
      text-4xl text-purple-900
      font-sans font-bold
      pt-12
      px-16
      mx-auto
      text-center
    `}
    max-width: ${rhythm(40)};
  `;

  const Author = styled.div`
    ${tw`
        flex flex-row justify-center pb-12
    `}
    div {
      ${tw`
        mx-1
      `}
    }
    .avatar {
      ${tw`
          rounded-full
          h-16 w-16 
          flex items-center justify-center 
          border-teal-900 border-2
        `}
    }
    .publish__date,
    .post__author {
      .meta {
        ${tw`
          text-gray-500
        `}
      }
    }
  `;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <PostTitle>
        <h1>{post.frontmatter.title}</h1>
      </PostTitle>
      <Content>
        <Article>
          <header>
            <Author>
              <div className="publish__date">
                <div className="meta">Last updated</div>
                <div className="info">{post.frontmatter.date}</div>
              </div>
              <div>
                <Img
                  className="avatar"
                  fixed={data.file.childImageSharp.fixed}
                />
              </div>
              <div className="post__author">
                <div className="meta">Writtern By</div>
                <div className="info">Shaphan Nzabonimana</div>
              </div>
            </Author>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </Article>
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  {`← ${previous.frontmatter.title}`}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {`${next.frontmatter.title} →`}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Content>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fixed(width: 64, height: 64) {
          src
          srcSet
          width
          height
        }
      }
    }
  }
`;
