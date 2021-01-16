import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from '../components/404'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Business cat at work!" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
