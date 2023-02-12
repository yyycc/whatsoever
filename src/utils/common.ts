export const ALL_TAGS = '全部'

export function getArrayWithCount(data: string[], withTotalCount = false) {
  const res: { [key: string]: any } = {}
  if (withTotalCount) {
    res[ALL_TAGS] = data.length
  }
  data.forEach(ele => {
    if (res[ele]) {
      res[ele]++
    } else {
      res[ele] = 1
    }
  })
  return res
}

export function spaceToHyphen(str: String) {
  return str.replaceAll(' ', '-').toLowerCase()
}

// 表格md语法转react组件语法
export const columns = [{ title: '选择器', dataIndex: 'name1' }, { title: '符号', dataIndex: 'name2' }]

function generateColumn(data = '|  hook |  描述  | 注册方法  | 调用方法 |') {
  const column = `{title:'$title',dataIndex:'name$dataIndex'}`
  const titles = data.split('|').filter(ele => !!ele).map(ele => ele.replaceAll(' ', ''))
  const columns = titles.reduce((prev, cur, index) => {
    return `${prev}${column.replace('$title', cur).replace('$dataIndex', `${index}`)}${index < titles.length - 1 ? ',' : ''}`
  }, '')
  return `export const columns = [${columns}]`
}

export const dataSource = [{ key: 1, name1: '后代', name2: '空格' }, { key: 2, name1: '相邻后代', name2: '>' }, {
  key: 3,
  name1: '兄弟(后面的兄弟)',
  name2: '～'
}, { key: 4, name1: '相邻兄弟', name2: '+' }]

const a = '| SyncHook | 同步 | tap | call |\n' +
  '| SyncBailHook | 同步保险  | tap | call |\n' +
  '| SyncWaterfallHook | 同步瀑布  | tap | call |\n' +
  '| SyncLoopHook | 同步循环  | tap | call |\n' +
  '| AsyncParallelHook | 异步并行 | tap、tapAsync、tapPromise | call、callAsync、promise |\n' +
  '| AsyncParallelBailHook | 异步并行保险 | tap、tapAsync、tapPromise | call、callAsync、promise |\n' +
  '| AsyncSeriesHook | 异步串行 | tap、tapAsync、tapPromise | call、callAsync、promise |\n' +
  '| AsyncSeriesBailHook | 异步串行保险 | tap、tapAsync、tapPromise | call、callAsync、promise |\n' +
  '| AsyncSeriesWaterfallHook | 异步串行瀑布 | tap、tapAsync、tapPromise | call、callAsync、promise |'

function generateDataSource(data = a) {
  const lines = data.split('\n')
  const dataSource = `{key:$index,$name}`
  const dataSources = lines.reduce((prev, cur, index) => {
    const names = cur.split('|').filter(ele => !!ele).map(ele => ele.replaceAll(' ', ''))
    const name = names.reduce((prev, cur, nameIndex) => {
      return `${prev}name${nameIndex}:'${cur}'${nameIndex < names.length - 1 ? ',' : ''}`
    }, '')
    return `${prev}${dataSource.replace('$index', `${index}`).replace('$name', name)}${index < lines.length - 1 ? ',' : ''}`
  }, '')
  return `export const dataSource = [${dataSources}]`
}