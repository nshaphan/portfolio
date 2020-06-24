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
      <div>
        <div className="flex items-center justify-start">
          <div className="brand">SN</div>
          <div className="font-bold text-2xl ml-2 text-gray-700">
            ShaNcreates
          </div>
        </div>
      </div>

      <div className="blog__menu">
        <Link to="/" style={{ textDecoration: 'none' }}>
          About Me
        </Link>
        <Link to="/">Articles</Link>
        <Link to="/">Contact</Link>
      </div>
    </NavContainer>
  );
  return (
    <PageWrapper>
      <header className="border-gray-900">{header}</header>
      <main>{children}</main>
      <Footer>
        <span>{`© ${new Date().getFullYear()} , Built with`}</span>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </PageWrapper>
  );
};

export default Layout;
