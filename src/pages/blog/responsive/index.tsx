import * as React from 'react'
import Layout from "../../../components/layout"
import './index.scss'
import { StaticImage } from "gatsby-plugin-image"
import { Select } from "antd"
import { useState } from "react"

const Responsive = () => {
  const [direction, setDirection] = useState('ltr')
  function handleChange(e: string) {
    setDirection(e)
  }
  return (
    <Layout>
      <h1 className="responsive-h">Responsive Design</h1>
      <div className="logical-properties">
        <div className="logical-properties-select">
          <Select defaultValue={direction} style={{ width: 120 }}
                  options={[{ value: 'ltr', label: 'ltr' }, { value: 'rtl', label: 'rtl' }]} onChange={handleChange}/>
        </div>
        <div className="logical-properties-content">
          <div className="logical-properties-content-title"></div>
          <div className="logical-properties-content-detail" style={{direction: direction === 'ltr' ? 'ltr': 'rtl'}}>
            <StaticImage
              alt="example image"
              src="../../../images/example.jpg"
            />
            <span
              className="logical-properties-content-detail-span">用过flex布局的小伙伴应该知道答案，flex布局中也有个direction属性flex-direction，它也支持你将布局从水平方向改为垂直方向，在flex中你几乎找不到top、right、bottom和left的字样，只有start和end。当顺序是从右至左，start就是右，反之同理。所以不要使用方向属性，而是使用逻辑属性，用margin-inline-start替代margin-left；用margin-block-start替代margin-top。inline即代表文本流的方向，block代表块的布局方向。</span>
          </div>
        </div>
      </div>

      <div className="responsive-inputs">
        <div className="responsive-inputs-div">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"/>
        </div>
        <div className="responsive-inputs-div">
          <label htmlFor="number">Number</label>
          <input type="number" id="number"/>
        </div>
        <div className="responsive-inputs-div">
          <label htmlFor="tel">Tel</label>
          <input type="tel" id="tel"/>
        </div>
        <div className="responsive-inputs-div">
          <label htmlFor="url">URL</label>
          <input type="url" id="url"/>
        </div>
        <div className="responsive-inputs-div">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" autoComplete="name"/>
        </div>
        <div className="responsive-inputs-div">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" autoComplete="country"/>
        </div>
        <div className="responsive-inputs-div">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" autoComplete="email"/>
        </div>
      </div>
    </Layout>
  )
}

export default Responsive