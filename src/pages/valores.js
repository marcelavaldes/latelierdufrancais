import React from "react"
import { graphql } from "gatsby"

import Pricing from "../components/pricing"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PricingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Valores y medios de pago" />
      <h1>Valores</h1>
      <p>
        Mientras más horas adquieras, <b>obtienes descuentos<b>. Ahorra dinero
        aprendiendo junto a familiares, amistades o quien tu prefieras.
      </p>
      <Pricing />
    </Layout>
  )
}

export default PricingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
