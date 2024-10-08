export const QUERY_CONTACT = `
query ContactQuery {
  page(id: "74", idType: DATABASE_ID) {
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
    contactFields {
      title
      contactFormEmailTo
      contactFormSubjectOptions {
        option
      }
      howDidYouHearFromUs {
        option
      }
      formNotice
      formButton      
    }
  }
}
`;
