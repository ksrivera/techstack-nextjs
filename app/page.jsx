/* "use client"

//Components
import BackToTop from "./components/BackToTop";

import Search from "./components/Search";

//React Components
import { use, useState, useEffect } from "react"; 
import Testimonial from "./components/Testimonial";

//AOS import
//import AOS from 'aos'
//import 'aos/dist/aos.css'

const getTools = async(query) => {
   const domain = query;

   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'accept': 'application/json',
         'x-api-key': 'H8uuLzEDsg4Beb3051FBng'
      },
      body: JSON.stringify({
         query: `
         query Tools($domain: String!){
            tools(query: "$domain") {
                count
                edges {
                    node {
                        canonicalUrl
                        category
                        description
                        id
                        imageUrl
                        name
                        ossRepo
                        slug
                        subCategory
                        title
                        verified
                        websiteUrl
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

   let res = await fetch('https://api.stackshare.io/graphql?access_token=required', options)
   
   return res.json();
}

const getLeads = async() => {
   const query = '';

   const options = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'accept': 'application/json',
         'x-api-key': process.env.GRAPHQL_KEY
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

   let res = await fetch('https://api.stackshare.io/graphql?access_token=required', options)
   
   return res.json();
}
 */
/* const getEnrichment = async (query) => {
   const domain = query;

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

   let res = await fetch('https://api.stackshare.io/graphql?access_token=required', options)
   
   return res.json();
} */

import Hero from "./components/Hero";
import Search from "./components/Search";
import BackToTop from "./components/BackToTop";
import Testimonial from "./components/Testimonial";

function Home() {
   //const [load, setLoad] = useState('accenture.com');
/*    const [search, setSearch] = useState('')
   const [searchToggle, setSearchToggle] = useState('')
   const [query, setQuery] = useState('')
 */
   //let enrichmentResult = use(getEnrichment('accenture.com'));

   //let toolResult = use(getTools("react"));
   //console.log(toolResult.data.tools.edges[0].node.description);
   //console.log(toolResult.data.tools.edges);
   //console.log(toolResult);

/*    useEffect(() => {
      if(search === '') return

      getEnrichment(search)
   }, [search])

   const handleClick = (e) => {
      e.preventDefault();
      setSearch(e.target.value)
   }

   const clickSearch = (e) => {
      e.preventDefault()
      setSearch(searchToggle)     
    }
 */
   //AOS.init()

/*    useEffect(() => {
      AOS.init({
         duration: 2000
      }, [])
   })
 */

  return (
    <div className='bg-slate-800 h-full text-slate-100'>
      <Hero/>
      <Search/>
      {/* <div className='stack pt-24'>
         <div className="stax-container content-center">
               <div className="container-company flex pt-5 pb-5 w-11/12 self-auto mb-10 border-b-2 border-gray-400">
                  <div className="img ">
                        <img className='w-52' src={enrichmentResult.data.enrichment.imageUrl} alt={enrichmentResult.data.enrichment.companyName}/>
                  </div>
                  <div className="cmpny-description pl-4">
                     <h2 className='text-2xl'><strong>{enrichmentResult.data.enrichment.companyName}</strong></h2>
                     <a className='pl-5  border-gray-700' href={enrichmentResult.data.enrichment.domain}>{enrichmentResult.data.enrichment.domain}</a>
                  </div>
               </div>
         </div>
      </div>   */}
      <Testimonial/>
      <BackToTop/>
    </div>
  )
}

export default Home;
