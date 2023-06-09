'use client';
import React from 'react'
import Link from "next/link"
import { useState, useEffect } from 'react';


const DarkModeIcons = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const iconColor = isDarkMode ? 'white' : 'black';

  // const About = () => {
  return (
    // <div className="flex items-center justify-between w-full">
    //   <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
    //     {/* <div className="w-full lg:w-2/3 h-64 dark:bg-gray-800" /> */}
    //     <div className="w-full lg:w-full h-3/5 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">
    //     <a href="">
    //       <img
    //         src="https://source.unsplash.com/400x200/?engineering"
    //         className="rounded-t-lg flex items-center justify-between"
    //         alt="This is an image"
    //       />
    //     </a>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="container pt-9 max-w-full bg-gradient-to-bl from-sky-500 to--500 hover:bg-gradient-to-r">
        <div className="pt-20">
          <h1 className="about-block text-center text-2xl font-extrabold pt-10 ">
            About Us
          </h1>
          <div className="flex flex-row justify-center space-x-8 pt-5">
            <Link
              className="flex flex-row justify-center"
              href={"http://facebook.com"}
            >
              <svg className='icons'
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 448 512"
                fill={iconColor}
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
              </svg>
            </Link>
            <Link
              className="flex flex-row justify-center"
              href={"http://discord.com"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512" fill={iconColor}>
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
            </Link>
            <Link
              className="flex flex-row justify-center"
              href={"http://linkedin.com"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" fill={iconColor}>
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </Link>
            <Link
              className="flex flex-row justify-center"
              href={"http://github.com"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512" fill={iconColor}>
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </Link>
          </div>
        </div>
        <div className="about-container">
          <div className="about-block mb-12 flex flex-wrap flex-row ">
            <div className="about-image">
              <img
                src="https://source.unsplash.com/400x200/?mission"
                alt="This is an image"
              />
            </div>
            <div className="content pl-8">
              <h5>Our Mission</h5>
              <p>
                Our mission is to provide the most comprehensive and up-to-date
                information on the tech stacks used by the world’s leading
                companies. We aim to help developers, entrepreneurs, and
                enthusiasts learn from the best practices and choices of the
                industry’s innovators and disruptors. We believe that by sharing
                the insights and details of the technologies behind successful
                products and services, we can empower our users to make informed
                decisions and build better solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="about-container ">
          <div className="about-block mb-12 flex flex-wrap flex-row-reverse">
            <div className="about-image">
              <img
                src="https://source.unsplash.com/400x200/?vision"
                alt="This is an image"
              />
            </div>
            <div className="content pr-8">
              <h5>Our Vision</h5>
              <p>
                Our vision is to become the ultimate source of tech stack
                information for the global tech community. We aspire to create a
                platform where anyone can discover, compare, and learn from the
                tech stacks of any company, big or small, across any industry or
                domain. We envision a world where tech stack knowledge is
                accessible, transparent, and valuable for everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="about-container pb-10 md:block">
          <div className="about-block mb-12 flex flex-wrap flex-row">
            <div className="about-image">
              <img
                src="https://source.unsplash.com/400x200/?values"
                alt="This is an image"
              />
            </div>
            <div className="content pl-8">
              <h5>Our Values</h5>
              <p>
                Our values guide our actions and decisions as we strive to
                achieve our mission and vision. They are: Quality: We are
                committed to delivering high-quality content that is accurate,
                reliable, and relevant. Curiosity: We are driven by curiosity
                and passion for learning new things and exploring new
                possibilities. Diversity: We embrace diversity and inclusion in
                our team, our users, and our content. We respect and celebrate
                the different perspectives and experiences that enrich our
                platform. Collaboration: We value collaboration and teamwork as
                the key to success. We support each other, share feedback, and
                learn from each other. Innovation: We are constantly looking for
                ways to improve our platform, our content, and our user
                experience. We welcome new ideas, challenges, and opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DarkModeIcons;