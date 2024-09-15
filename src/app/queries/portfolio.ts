export const QUERY_PORTFOLIO_INFO = `
  query PortfolioQuery {
    page(id: "69", idType: DATABASE_ID) {
      seo {
        title
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphImage {
          sourceUrl
          mediaDetails {
            height
            width
            file
          }
        }
        canonical
        opengraphDescription
        schema {
          raw
        }
        opengraphSiteName
        opengraphUrl
        opengraphTitle
        opengraphType
      }
      title
      portfolioFields {
        title
        description
        loadMore
      }
    }
}
`;

export const QUERY_PORTFOLIO = (noPosts: any, afterKey: any) => `
  query PortfolioPosts {
    portfolioCompanies(first: ${noPosts}, where: {status: PUBLISH}, after: "${afterKey ? afterKey : ''}") {
      edges {
        node {
          title
          link
          uri
          portfolioSingleFields {
            galleryGrid {
              edges {
                node {
                  title
                  altText
                  sourceUrl
                  srcSet
                }
              }
            }
            title
            clientLocation
            description
            clientName
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
 `;
