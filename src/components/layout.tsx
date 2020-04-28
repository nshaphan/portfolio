import React from "react"
import { Link } from "gatsby"
import tw from "tailwind.macro"

import { rhythm, scale } from "../utils/typography"
import styled from "@emotion/styled"

interface Props {
  location: Location,
  title: string,
  children?: any
}

const Layout = ({ location, title, children }: Props) => {
  let header
  const Navbar = styled.div`
    ${tw `
      bg-gray-200
    `}
  `
    header = (
      <Navbar>
        Hello World
      </Navbar>
    )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
