import React from "react"

// Custom Components
import Layout from "../components/Layout"

const products = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>This is our products page</h1>
    </Layout>
  )
}

export const data = graphql`
  query OtherQuery {
    site {
      info: siteMetadata {
        author
      }
    }
  }
`

export default products
