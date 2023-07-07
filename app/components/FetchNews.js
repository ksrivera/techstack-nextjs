'use client'

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";

const FetchNews = ({data}) => {
    const [newsData, getNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    let id = 0;

    useEffect(() => {
        getNewsData(data.articles)
    })

    const arrPage = [1,2,3,4,5,6,7,8,9,10]
    const lastIndex = currentPage * 9;
    const firstIndex = lastIndex - 9;
    const currentPost = newsData.slice(firstIndex, lastIndex);
    // const page = Math.floor(newsData.length / 10);
    // console.log(firstIndex, lastIndex);
    // console.log(currentPost);

    new Date(currentPost.publishedAt).toDateString() 
    const profile = currentPost.urlToImage
    const errorImg = 'https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

  return (
    <div className="container mx-auto py-4 px-8">
        <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            {currentPost.map(data => ( 
                <div className="grid rounded-lg justify-center pb-12" key={id++}>
                    <div className="max-w-sm mt-3 bg-gray-800 border border-gray-200 rounded-lg drop-shadow-2xl grid">
                        <a href={data.url}>
                            <img className="rounded-t-lg" src={data.urlToImage ? data.urlToImage : '/assets/images/no-img.png'} alt={data.title} />
                        </a>
                        <div className="p-5">
                            <a href={data.url}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{data.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-400">
                                {data.description}
                            </p>
                            <p className="mb-3 font-normal text-gray-400">
                                <div className='text-violet-400'>{new Date(data.publishedAt).toDateString()}</div>
                            </p>
                            <p className="mb-3 font-normal text-gray-400">
                                Author: {data.author ? data.author : 'No Author'}
                            </p>
                            <Link href={data.url}>
                                <p className="mb-3 font-normal text-gray-400 text-[14px]">
                                    Source: {data.source.name}
                                </p>
                            </Link>
                            <Link href={data.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-500">
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <p className="grid grid-cols-10 gap-2 justify-start px-96">
        {arrPage.map((item, index) => (
          <span className="bg-slate-400 text-center cursor-pointer hover:bg-slate-300"
          onClick={() => setCurrentPage(index + 1)}
          key={index}>{index + 1}</span>
        ))}
        </p>
    </div>
  )
}

export default FetchNews