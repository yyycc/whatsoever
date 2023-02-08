export const ALL_TAGS = '全部'

export function getArrayWithCount(data: Array<any>, withTotalCount = false) {
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