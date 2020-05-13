import React from 'react';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import { NavContainer } from '../utils/styles/blogStyles';

interface Props {
  location: Location;
  title: string;
  children?: {};
}
const PageWrapper = styled.div`
  ${tw`
     font-sans
     bg-gray-100
    `};
`;

const Footer = styled.footer`
  ${tw`
    bg-purple-900
    p-4
  `}
`;
const Layout = ({ children }: Props) => {
  const header = (
    <NavContainer>
      <div className="blog__owner">
        <Link to="/blog">{`<Blog by Shaphan />`}</Link>
      </div>
      <div className="blog__menu">
        <Link to="/">About Me</Link>
      </div>
    </NavContainer>
  );
  return (
    <PageWrapper>
      <header>{header}</header>
      <main>{children}</main>
      <Footer>
        <span>{`© ${new Date().getFullYear()} , Built with`}</span>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </PageWrapper>
  );
};

export default Layout;
