import * as React from 'react'
import Layout from "../../components/layout"
import CommonReading from "../../components/common-reading/common-reading"

const Reading = () => {
  return (
    <Layout className="reading">
      <CommonReading folder="Reading" title="Reading"/>
    </Layout>
  )
}

export default Reading