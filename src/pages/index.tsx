// TODO: Design a portfolio page
// TODO: Add Google Analytics
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: Location;
}

const Home = ({ data, location }: Props) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Welcome </h1>
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
