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
    <div className="bg-slate-800">
      <div className="pl-44 text-2xl font-extrabold pt-48 ">
          <h1 className="text-white">Welcome to Tech News</h1>
      </div> 
      <FetchNews data={news}/>
      <BackToTop/>
    </div>
  )
}

export default TechNews
