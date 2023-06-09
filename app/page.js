"use client"

import { use, useState, useEffect } from "react"; 
import BackToTop from "./components/BackToTop";
import Link from "next/link";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Accordion } from "./components/Accordion";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

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

const getEnrichment = async (query) => {
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
}

export default function Home() {
   //const [load, setLoad] = useState('accenture.com');
   const [search, setSearch] = useState('accenture.com')
   const [searchToggle, setSearchToggle] = useState('')

   let enrichmentResult = use(getEnrichment('accenture.com'));

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
   AOS.init()

   useEffect(() => {
      AOS.init({
         duration: 2000
      }, [])
   })

  return (
    <div className='bg-slate-800 h-full text-white'>
      <link
      rel="icon"
      href="icon?<generated>"
      type="image/<generated>"
      sizes="<generated>"
      />

      <div>
         <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply" data-aos='fade-up'>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
               <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">For Developers, By Developers</h1>
               <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Welcome to TechStack by UCoder</p>
               <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
{/*                      <a href="#enrichment" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-violet-700 hover:bg-violet-600 focus:ring-4 focus:ring-violet-300 transition-all">
                        Get started
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                     </a> */}
               </div>
            </div>
         </section>
      </div>

      <div>
         <section >
            <div data-aos='zoom-in'>

   
            </div>

            <div className="mx-auto grid pt-10 grid-cols-2 justify-stretch justify-items-center">
               <div className="col-span-2"> 
                  <htmlForm className="flex items-center mx-auto">   
                     <label htmlFor="simple-search" className="sr-only">Search</label>
                     <div className="relative w-44">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
      
                        <input type="text" id="simple-search" 
                        
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-400 block w-full pl-10 p-2.5" placeholder="Search" required />
                     </div>
                     <button type="submit"
                     className="p-2.5 ml-2 text-sm font-medium text-white bg-violet-400 rounded-lg border border-violet-500 hover:bg-violet-700 focus:ring-4 focus:outline-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                     </button>
                  </htmlForm>
               </div>
            </div>
      
         {/*                   <div data-aos='fade-right'>
                           <div className="upper-rank flex pt-12">
                              <img className='w-32 ml-10 rounded-lg' src={data.node.imageUrl ? data.node.imageUrl : '/assets/images/no-img.png'} alt={data.node.title ? data.node.title : 'Not Available'}/>
                              <div className="title-desc flex-col mx-12">
                                 <div className="main-fork flex justify-between items-center ">
                                    <div className="fork flex">
                                          <h4><strong>Title: {data.node.title ? data.node.title : 'No Title Available'}</strong></h4> 
                                          <Link href={data.node.ossRepo ? data.node.ossRepo : ''} className='ml-3 text-xl pr-2'><svg className='fill-blue-700' height="1em" viewBox="0 0 448 512"><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/>{data.node.ossRepo ? data.node.ossRepo : ''}</svg></Link>
                                    </div>    
                                    <Link href={data.node.websiteUrl ? data.node.websiteUrl : ''}><h3>URL: {data.node.websiteUrl ? data.node.websiteUrl : 'Website URL Not Available'}</h3></Link>
                                 </div>    
                                 <p className='mt-2'>Description: {data.node.description ? data.node.description : 'No Description Available'}</p>
                              </div>
                           </div>
                           </div> */}
      <div className='stack pt-24'>
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

        {/* ######## APPLICATION BOXES  ######### */}
        <div className="app-enclosure w-11/12">
            <p className='font-bold text-2xl mb-4'>Company Tools</p>
            {enrichmentResult.data.enrichment.companyTools.edges.map((data) => (
               <div data-aos='fade-right'>
                      <p className='ml-2 mb-2'>Category: {data.node.tool.category}</p>
                      <div className='appli flex flex-wrap mb-5 border-solid border-2 border-indigo-600 rounded-lg pt-3 pb-3'>
                        
                          <div className='apps m-2.5 mx-3.5'>
                              <img className='w-28' src={data.node.tool.imageUrl} alt="utilities"/>
                              <p>{data.node.tool.name}</p>
                          </div>
                          <div>
                              <p className='text-violet-400'>Title: <span className='text-neutral-100'>{data.node.tool.title}</span></p>
                              <p className='text-violet-400'>Description: <span className='text-neutral-100'>{data.node.tool.title}</span></p>
                              <p className='text-violet-400'>Website URL: <span className='text-neutral-100'><a href={data.node.tool.websiteUrl}>{data.node.tool.websiteUrl}</a></span></p>
                          </div>
                     </div>
               </div>
            ))

            }
     
           {/*  <p className='ml-2 mb-2'>Utilities</p>
            <div className='utilities flex flex-wrap mb-5 border-solid border-2 border-indigo-600 rounded-lg pt-3 pb-3'>
                <div className='utility m-2.5 mx-3.5'>
                    <img className='w-28' src='' alt="utilities"/>
                    <p>App Name</p>
                </div>                  
            </div>
            <p className='ml-2 mb-2'>DevOps</p>
            <div className="devops flex flex-wrap mb-5 border-solid border-2 border-indigo-600 rounded-lg pt-3 pb-3">
                    <div className="dev m-2.5 mx-3.5">
                      <img className='w-28' src='' alt="utilities"/>
                      <p>App Name</p>
                    </div>                   
            </div>
            <p className='ml-2 mb-2'>Biztools</p>
            <div className="biztools flex flex-wrap mb-5 border-solid border-2 border-indigo-600 rounded-lg pt-3 pb-3">
                  <div className="biz m-2.5 mx-3.5">
                      <img className='w-28' src='' alt="biztools"/>
                      <p>App Name</p>
                  </div>                   
            </div>                          */}
        </div>
    </div>  
</div>






{/*                {enrichmentResult.data.enrichment.edges.map((data) => (
                  <div className="flex-col items-center rounded-lg">


                  
                  <div data-aos='fade-right'
                  class="flex flex-col mt-4 rounded-lg bg-slate-300 shadow-inner md:max-w-xl md:flex-row">
                  <img
                     class="h-96 rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                     src={data.node.imageUrl ? data.node.imageUrl : '/assets/images/no-img.png'}
                     alt={data.node.title ? data.node.title : 'Image Not Available'} />
                  <div class="flex flex-col justify-start p-6">
                     <h5
                        class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                        <span className="text-indigo-500">Title:</span> {data.node.title ? data.node.title : 'No Title Available'}
                     </h5>
                     <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                     <span className="text-indigo-500">Description:</span> {data.node.description ? data.node.description : 'No Description Available'}
                     </p>
                     <p class="text-xs text-neutral-500 dark:text-neutral-300">
                       <span className="text-indigo-500">OSS Repo:</span>  <a href={data.node.ossRepo ? data.node.ossRepo : data.node.ossRepo}>{data.node.ossRepo ? data.node.ossRepo : 'OSS Repo Not Available'}</a> 
                     </p>
                  </div>
                  </div>

                  </div>
               ))} */}

      
  
                  {/* <img className='w-32 ml-10 rounded-lg' src='' alt="Starbucks"/>
                  <div className="title-desc flex-col mx-12">
                     <div className="main-fork flex justify-between items-center ">
                        <div className="fork flex">
                              <h1 className='text-3xl'><strong>Facebook</strong></h1> 
                              <Link href='http://www.google.com' className='ml-3 text-xl '><svg className='fill-blue-700' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg></Link>
                        </div>    
                        <Link href='https://starbucks.com'> <h3>starbucks.com</h3></Link>
                     </div>    
                     <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias omnis reiciendis officia facere soluta aliquam ea pariatur inventore? Consectetur?</p>
                  </div> */}

 
        {/*    <div className="lower-rank mx-10 pt-8 pb-12 ">
            </div> */}
         
     
         </section>
{/*          <div className="heroe2 my-44">
         <div className="heroe-holder flex-col w-2/3  items-center rounded-lg  ">
            <div className="upper-rank flex pt-12 ">
                  <Image className='w-32 ml-10 rounded-lg' src='' alt="Starbucks"/>
                  <div className="title-desc flex-col mx-12">
                     <div className="main-fork flex justify-between items-center ">
                        <div className="fork flex">
                              <h1 className='text-3xl'><strong>Facebook</strong></h1> 
                              <Link href='http://www.google.com' className='ml-3 text-xl '><svg className='fill-blue-700' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg></Link>
                        </div>    
                        <Link href='https://starbucks.com'> <h3>starbucks.com</h3></Link>
                     </div>    
                     <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias omnis reiciendis officia facere soluta aliquam ea pariatur inventore? Consectetur?</p>
                  </div>
            </div>

            <div className="lower-rank mx-10 pt-8 pb-12 ">
                  <h1 className='text-3xl'><strong> What is Facebook?</strong></h1>
                  <h3 className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eum illo quod optio itaque tempore, sequi iusto doloribus error ab, doloremque temporibus at nam assumenda ad aliquam sed ratione magni expedita veniam distinctio tenetur? Neque incidunt asperiores assumenda cum pariatur?</h3>
            </div>
         </div>
      </div> */}
      </div>
      <div>
         <section>
            <h1 id='tools'>
               Tools
            </h1>
         </section>
      </div>
      <div>
         <section>
            <h1 id='search'>
               Search
            </h1>
         </section>
      </div>
      <div>
         <section>
            <h1 id='leads'>
               Leads
            </h1>
         </section>
      </div>
      <Accordion/>
      <BackToTop></BackToTop>
   </div>
  )
}
