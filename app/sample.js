const domain = 'accenture.com';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'x-api-key': 'H8uuLzEDsg4Beb3051FBng'
  },
  body: JSON.stringify({
    query: `
      query Enrichment($domain: String!) {
        enrichment(domain: $domain) {
          companyName
          domain
          imageUrl
          verified
          companyTools {
            edges {
              cursor
              node {
                tool {
                  canonicalUrl
                  category
                  description
                  id
                  imageUrl
                  name
                  title
                  websiteUrl
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      domain: domain
    }
  })
};
