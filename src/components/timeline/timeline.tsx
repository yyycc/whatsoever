import * as React from 'react'
import { CalendarOutlined } from '@ant-design/icons'
import './timeline.scss'
import { getMonthArrayWithCount } from "../../utils/common"
import { IFrontmatter, INode } from "../data"

const Timeline = ({ date, setDate, data }: Partial<IFrontmatter> & { setDate: (date: string) => void, data: INode[] }) => {
  const dates = data.map(ele => ele.frontmatter.date)
  const datesInfo = getMonthArrayWithCount(dates, false)
  return (
    <div className="timeline">
      <div className="timeline-title">
        <CalendarOutlined/>
        <div className="timeline-title-div">日期</div>
      </div>
      <div className="timeline-list">
        {Object.keys(datesInfo).map(info => {
          return <div key={info} onClick={() => setDate(info === date ? '' : info)}
                      className={["timeline-list-line", info === date ? "timeline-list-line-active" : ''].join(' ')}>
            <div className="timeline-list-line-tag">{info}</div>
            <div className="timeline-list-line-count">{`(${datesInfo[info]})`}</div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Timeline