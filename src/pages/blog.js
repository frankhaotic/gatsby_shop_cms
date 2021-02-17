import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Custom Components
import Layout from "../components/Layout"

const Blog = () => {
  let data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  // console.log(data.site.siteMetadata)
  data = data.site.siteMetadata

  return (
    <Layout>
      <h1>My name is {data.author}</h1>
      <p>This is my {data.title}</p>
    </Layout>
  )
}

export default Blog
