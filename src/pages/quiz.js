import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quiz from '../components/quiz'

const QuizPage = () => (
  <Layout>
    <SEO title="Here's a quiz for no reason" />
    <Quiz />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default QuizPage