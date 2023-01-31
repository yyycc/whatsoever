import { graphql, useStaticQuery } from "gatsby"

// 首页展示的博文；
// tag: example的数据不展示
const UseBlogHome = () => {
  return useStaticQuery(graphql`
      query {
          allMdx(filter: {frontmatter: {tag: {ne: "example"}}}, sort: { frontmatter: { date: DESC }}) {
              nodes {
                  excerpt
                  frontmatter {
                      title
                      tag
                      slug
                      date(formatString: "YYYY-MM-DD")
                      folder
                  }
              }
          }
      }
  `)
}

export default UseBlogHome