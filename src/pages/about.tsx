import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import './about.scss'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="about">
        <div className="about-title">About Me</div>
        <p>First some Q&As:</p>
        <p>Q1: Favorite Food</p>
        <p>A1: Hot pot</p>
        <p>Q2: Favorite Anime</p>
        <p>A2: One Piece</p>
        <p>Q3: Favorite Activity</p>
        <p>A3: Awake by the alarm in the morning, take a look at the clock and then go back to sleep.</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me"/>

export default AboutPage