import * as React from 'react'
import Layout from "../../components/layout"
import CommonStories from '../../components/common-stories/common-stories'

const Reading = () => {
  return (
    <Layout className="reading">
      <CommonStories tag="stories" title="stories"/>
    </Layout>
  )
}

export default Reading