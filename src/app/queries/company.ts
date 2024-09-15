export const QUERY_COMPANY = `
  query CompanyQuery {
    page(id: "68", idType: DATABASE_ID) {
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
      companyFields {
        title
        description
        story
        storyDescription
        values
        valuesItems {
          subDescription
          subTitle
        }
        vision
        visionDescription
        leadership
        leadershipDescription
        team {
          edges {
            node {
              ... on TeamMember {
                teamSingleFields {
                  title
                  description
                }
              }
            }
          }
        }
        clients
        clientsDescription
        clientsLogos {
          edges {
            node {
              ... on Client {
                title
                featuredImage {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
