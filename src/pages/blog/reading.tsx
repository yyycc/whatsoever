import * as React from 'react'
import Reading from "../../components/reading/reading"
import Layout from "../../components/layout"

const Css = () => {
  return (
    <Layout className="reading">
      <Reading folder="Reading" title="Reading"/>
    </Layout>
  )
}

export default Css