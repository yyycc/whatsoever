import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I just begin to build my new blog which is called <b>whatsoever</b> and I hope this time it lasts</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage