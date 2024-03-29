import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import './about.scss'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="about">
        <div>why this blog</div>
        <p>以前我觉得初心这个词很扯，后来我发现人真的是会忘记初心的。</p>
        <p>就比如我写博客的初心是什么？</p>
        <p>前一阵子整理前些年写的一些博客，想搬到这个站点来，结果发现写得都太粗浅了，让我彻底歇了用陈年文章填充博客的心思。</p>
        <p>我想写的并不是那种如何安装如何启动类型的文章，而是介绍原理，追根究底的文章。</p>
        <p>当然写什么样的文章并不是初心，初心是学。</p>
        <p>自认为懂了是第一层，能说于别人理解是第二层，能写明白是第三层，能写得让人明白是第四层。</p>
        <p>能写下来的，至少能算会8成吧。</p>
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
          A4: It's for learning and that's the only reason. I don't write it for other people to read, although somebody reading this would be really nice,
          but that's not the reason and motivation. It's a method for me to learn staff better and deeper.
          I will not write something I already know well like how to ,um...oh my god I know nothing well...
          I write things I don't quite get yet, and during which I can learn better.
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me"/>

export default AboutPage