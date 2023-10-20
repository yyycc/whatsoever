export interface IItem {
  url: string,
  title: string
  items: IItem[]
}

export interface IFrontmatter {
  tag: string
  folder: string
  slug: string
  date: string
  title: string
  data?: INode[]
  prev?: string
  next?: string
}

export interface INode {
  frontmatter: IFrontmatter
  tableOfContents: {
    items: IItem[]
  }
  excerpt: string
  id: string
}

export interface IAnchor {
  key: string
  href: string
  title: string
  children?: IAnchor[]
}

export interface IMDX {
  mdx: INode
}

export interface IAllMDX {
  allMdx: {
    nodes: INode[]
  }
}

export interface IMetadata {
  site: {
    siteMetadata: {
      title: string
      siteUrl: string
      description: string
      author: string
      motto: string
      github: string
      email: string
    }
  }
}