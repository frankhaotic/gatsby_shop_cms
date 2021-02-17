import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Custom Components
import Layout from "../components/Layout"

const Blog = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <h1>My name is {data.site.info.author}</h1>
      <p>This is my {data.site.info.title}</p>
    </Layout>
  )
}
export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
      }
    }
  }
`
export default Blog
