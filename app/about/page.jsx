'use client';
import React from 'react'
import Link from "next/link"
import { useState, useEffect } from 'react';
import Info from '../components/Info';


const AboutPage = () => {
    return (
    <>
    <Info/>

      <div className="container my-24 mx-auto md:px-6">

        <section className="mb-32">
          {/* <h2 className="mb-16 text-center text-2xl font-bold">Latest articles</h2> */}

          <div className="mb-16 flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg" className="w-full" alt="Louvre" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p className="mb-6 text-slate-100 leading-relaxed">
              Our mission at TechStack is to empower individuals and organizations with comprehensive insights and analysis of tech stacks. We strive to provide valuable resources and knowledge that enable informed decision-making, foster innovation, and drive technological advancement.
              </p>
            </div>
          </div>

          <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg "
                data-te-ripple-init data-te-ripple-color="light">
                <img src="/assets/images/vision.jpg" className="w-full" alt="vision image" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
              <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
              <p className="text-slate-100 leading-relaxed">
              Our vision is to be the leading platform for understanding, exploring, and leveraging tech stacks. We aim to be a trusted source of information, connecting developers, technology enthusiasts, and businesses to the latest trends, best practices, and successful implementations across industries.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="/assets/images/values.jpg" className="w-full" alt="Louvre" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold">Our Values</h3>
              <ol className='list-decimal leading-relaxed'>
                <li className='pb-2'>Knowledge and Expertise: We are committed to maintaining a high level of knowledge and expertise in the field of tech stacks. We continuously learn, research, and analyze emerging technologies to provide accurate and up-to-date insights.</li>
                <li className='pb-2' >Transparency and Integrity: We believe in transparency and integrity in our analysis and reporting. We present information in an unbiased and objective manner, ensuring the highest level of trustworthiness in our content.</li>
                <li className='pb-2'>Empowerment and Collaboration: We aim to empower individuals and organizations by providing the tools, resources, and knowledge needed to make informed decisions about tech stacks. We value collaboration and believe in fostering a community where ideas and experiences are shared.</li>
                <li className='pb-2'>Innovation and Adaptability: We embrace innovation and adaptability to stay ahead of evolving technology trends. We continuously seek new ways to improve our platform, explore emerging technologies, and deliver valuable insights to our users.</li>
                <li>User-Centric Approach: Our users are at the heart of everything we do. We prioritize their needs, value their feedback, and strive to provide a user-friendly experience that meets their expectations and exceeds their satisfaction.</li>
              </ol>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default AboutPage;