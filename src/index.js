import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { Layout } from "./components/layout"
import { MdxLink } from "./components/mdxLink"

const MyH1 = props => <h1 style={{ color: "red" }} {...props} />

const components = {
    h1: MyH1,
    a: MdxLink
}
export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
)

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
  )