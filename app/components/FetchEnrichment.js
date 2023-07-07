

export async function FetchEnrichment(query) {
    const domain = query;
     
    const header = {
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
     
    const res = await fetch('https://api.stackshare.io/graphql?access_token=required')

    const data = await res.json();

    return data;
}
