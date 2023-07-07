'use client'

import { useState } from "react"
import EnrichmentContainer from "./EnrichmentContainer"
import { FetchEnrichment } from "./FetchEnrichment";



const Search = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState({});

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }
    
    const handleSearch = (e) => {
        e.preventDefault();
        setResult(FetchEnrichment(query));
        console.log(result)
    }

  return (
    <>
        <div className="mx-auto grid pt-10 grid-cols-2 justify-stretch justify-items-center">
            <div className="col-span-2"> 
                <form className="flex items-center mx-auto">   
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-auto">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-400 block w-full pl-10 p-2.5" placeholder="Search" required onChange={ (e) => handleQuery(e) } />
                        </div>
                        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-violet-400 rounded-lg border border-violet-500 hover:bg-violet-700 focus:ring-4 focus:outline-none" onClick={(e) => handleSearch(e)}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>
        </div>

        <EnrichmentContainer result={result}/>
    </>
  )
}

export default Search