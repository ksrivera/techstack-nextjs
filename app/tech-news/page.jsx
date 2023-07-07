/* 'use client'
 */
import { use } from "react"
import FetchNews from "../components/FetchNews";
import BackToTop from "../components/BackToTop";

async function getNews() {
  let res = await fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=${process.env.NEWSAPI_KEY}`);

  return res.json();
}

const TechNews = () => {
  let news = use(getNews());

  return (
    <div className="bg-slate-800 pt-32">
      <div>
        <section class="bg-violet-200 mb-10">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tech News and Articles</h1>
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Stay Updated with the Latest Tech News and Innovations</p>
          </div>
        </section>
      </div>

      <FetchNews data={news}/>
      <BackToTop/>
    </div>
  )
}

export default TechNews
