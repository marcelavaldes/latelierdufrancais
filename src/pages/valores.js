import React, { useState, useCallback } from "react"
import { graphql } from "gatsby"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PricingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const [students, setStudents] = useState(1)
  const [hours, setHours] = useState(1)

  const handleStudents = useCallback(event => {
    setStudents(event)
  }, [])

  const handleHours = useCallback(event => {
    setHours(event)
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Valores y medios de pago" />
      <h1>Valores</h1>
      <p>
        En la tabla se muestra el <b>valor hora por persona</b> para las
        distintas modalidades.
      </p>

      {console.log("students: " + students)}
      {console.log("hours: " + hours)}

      <div style={{ margin: "50px auto" }}>
        <h3>Personas</h3>
        <Slider
          min={1}
          max={4}
          marks={{
            1: {
              label: "1 persona",
              style: {
                marginLeft: "16px",
              },
            },
            2: "2 personas",
            3: "3 personas",
            4: {
              label: "4 o más personas",
              style: {
                marginRight: "24px",
              },
            },
          }}
          step={null}
          onChange={handleStudents}
          defaultValue={1}
        />
      </div>

      <div style={{ margin: "50px auto" }}>
        <h3>Horas</h3>
        <Slider
          min={1}
          max={3}
          marks={{
            1: "1 Hora",
            2: "5 Horas",
            3: "10 Horas",
          }}
          step={null}
          onChange={handleHours}
          defaultValue={1}
        />
      </div>

      <p>{`El valor de ${
        hours === 1 ? "1 hora" : hours * 5 - 5 + " horas"
      } para ${
        students === 1 ? "1 estudiante" : students + " estudiantes"
      } es de`}</p>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>1 persona</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Presencial</td>
            <td>$15.000</td>
          </tr>
          <tr>
            <td>Online</td>
            <td>$50.000</td>
          </tr>
          <tr>
            <td>10</td>
            <td>$100.000</td>
          </tr>
        </tbody>
      </table>
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
