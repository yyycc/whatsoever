import * as React from 'react'
import Layout from "../../components/layout"
import CommonSourceCode from "../../components/common-source-code/common-source-code"

const SourceCode = () => {
  return (
    <Layout className="source-code">
      <CommonSourceCode folder="Source Code" title="Source Code"/>
    </Layout>
  )
}

export default SourceCode