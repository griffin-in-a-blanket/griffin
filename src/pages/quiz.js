import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quiz from "../components/quiz"

const QuizPage = () => (
  <Layout>
    <SEO title="Here's a quiz for no reason" />
    <Quiz />
  </Layout>
)

export default QuizPage
