import React from 'react'

const EnrichmentContainer = ({result}) => {
  return (
        <div className="app-enclosure w-11/12">
        {console.log(result)}
        {/* <p className='font-bold text-2xl mb-4'>Company Tools</p>
            {enrichmentResult.data.enrichment.companyTools.edges.map((data) => (
                <div data-aos='fade-right'>
                    <p className='ml-2 mb-2'>Category: {data.node.tool.category}</p>
                    <div className='appli flex flex-wrap mb-5 border-solid border-2 border-indigo-600 rounded-lg pt-3 pb-3'>
                    <div className='apps m-2.5 mx-3.5'>
                    <img className='w-28' src={data.node.tool.imageUrl} alt="utilities"/>
                    <p>{data.node.tool.name}</p>
                    </div>
                        <p className='text-violet-400'>Title: <span className='text-neutral-100'>{data.node.tool.title}</span></p>
                        <p className='text-violet-400'>Description: <span className='text-neutral-100'>{data.node.tool.title}</span></p>
                        <p className='text-violet-400'>Website URL: <span className='text-neutral-100'><a href={data.node.tool.websiteUrl}>{data.node.tool.websiteUrl}</a></span></p>
                    </div>
                </div>
             ))} */}
       </div>
  )
}

export default EnrichmentContainer