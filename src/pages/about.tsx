import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import './about.scss'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="about">
        <div className="about-title">About Me</div>
        {/*<p>First some Q&As:</p>*/}
        <p>Q1: Favorite Food</p>
        <p>A1: Hot pot</p>
        <p>Q2: Favorite Anime</p>
        <p>A2: One Piece</p>
        <p>Q3: Favorite Activity</p>
        <p>A3: Awake by the alarm in the morning, take a look at the clock and then go back to sleep.</p>
        <p>Q4: Why this blog</p>
        <p>
          A4: It's for learning and that's the only reason. I don't write it for other people to read, although somebody reading this would be very nice,
          but that's not the reason and motivation. It's a method for me to learn staff better and deeper.
          I will not write something I already know well like how to ,um...oh my god I know nothing well...
          I write things I don't quite get yet, and during which I learn deeper.
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me"/>

export default AboutPage