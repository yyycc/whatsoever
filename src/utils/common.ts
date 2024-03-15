export const ALL_TAGS = '全部'

export function getArrayWithCount(data: string[], totalCount: number) {
  const res: { [key: string]: any } = {}
  if (totalCount) {
    res[ALL_TAGS] = totalCount
  }
  data.forEach(ele => {
    const tags = ele.split(',');
    tags.forEach(tag => {
      if (res[tag]) {
        res[tag]++
      } else {
        res[tag] = 1
      }
    })
  })
  return res
}

export function getMonthArrayWithCount(data: string[], withTotalCount = false) {
  const res: { [key: string]: any } = {}
  if (withTotalCount) {
    res[ALL_TAGS] = data.length
  }
  data.forEach(ele => {
    const month = ele.slice(0, 7)
    if (res[month]) {
      res[month]++
    } else {
      res[month] = 1
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

const a = '| compiler | enviroment  | webpack.js |  |  |  |\n' +
  '| compiler| afterEnvironment  | webpack.js | WatchIgnorePlugin |  | |\n' +
  '| compiler| entryOption  | WebpackOptionsApply.js | EntryOptionPlugin<br>~~DllPlugin~~ | SyncBailHook |  |\n' +
  '| compiler| afterPlugins  | WebpackOptionsApply.js | ModuleFederationPlugin |  | 模块联邦 |\n' +
  '| compiler| afterResolvers  | WebpackOptionsApply.js |  |  |  |\n' +
  '| compiler| initialize  | webpack.js |  |  |  |\n' +
  '| compiler| beforeRun  | Compiler.js | NodeEnvironmentPlugin | AsyncSeriesHook |  |\n' +
  '| compiler| run  | Compiler.js |  | AsyncSeriesHook |  |\n' +
  '| compiler| normalModuleFactory  | Compiler.js | IgnorePlugin<br>NormalModuleReplacementPlugin |  |  |\n' +
  '| compiler| contextModuleFactory  | Compiler.js | IgnorePlugin<br>ContextReplacementPlugin<br>ContextExclusionPlugin |  |  |\n' +
  '|||| 创建normalModuleFactory |\n' +
  '|||| 创建contextModuleFactory |\n' +
  '| compiler| beforeCompile  | Compiler.js | DllReferencePlugin<br>ProgressPlugin<br>LazyCompilationPlugin | AsyncSeriesHook |  |\n' +
  '| compiler| compile  | Compiler.js | DllReferencePlugin<br>DelegatedPlugin<br>ExternalsPlugin |  |  |\n' +
  '|||| 创建Compilation |\n' +
  '| compiler| thisCompilation  | Compiler.js | ... |  |  |\n' +
  '| compiler| compilation  | Compiler.js | ... EntryPlugin |  |  |\n' +
  '| compiler| make  | Compiler.js | EntryPlugin | AsyncParallelHook |  |\n' +
  '| compilation | addEntry  | Compilation.js |  |  |  |\n' +
  '| compiler| finishMake  | Compiler.js |  | AsyncSeriesHook |  |\n' +
  '| compiler| afterCompile  | Compiler.js | AutomaticPrefetchPlugin | AsyncSeriesHook |  |'

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

// ,{key:18,name0:'compilation',name1:'addEntry',name2:'Compilation.js',name3:'',name4:'',name5:''},{key:19,name0:'compiler',name1:'finishMake',name2:'Compiler.js',name3:'',name4:'AsyncSeriesHook',name5:''},{key:20,name0:'compiler',name1:'afterCompile',name2:'Compiler.js',name3:'AutomaticPrefetchPlugin',name4:'AsyncSeriesHook',name5:''}