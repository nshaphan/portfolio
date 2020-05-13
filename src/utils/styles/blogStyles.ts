import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { rhythm } from '../typography';

export const Container = styled.div`
  ${tw`
        mx-auto 
        px-6 py-2 
        bg-purple-900
    `}
`;

export const NavContainer = styled(Container)`
  ${tw`
        flex justify-between items-center
    `}
  .blog__owner {
    ${tw`
      bg-gray-300
      p-1
    `}
    a {
      ${tw`
          no-underline
        `}
    }
  }
  .blog__menu {
    ${tw`
      text-white
    `}
  }
`;

export const brand = styled.a`
  ${tw`
    bg-blue-300
    `}
`;

export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(30)};
  padding: ${rhythm(0.5)} ${rhythm(3 / 4)};
`;

export const ContentWrapper = styled.div`
  ${tw`
    bg-white
  `}
`;
export const Article = styled.article`
  ${tw`
    pb-8
    bg-white
    p-4
    rounded-md
    border-gray-900
  `}
`;
