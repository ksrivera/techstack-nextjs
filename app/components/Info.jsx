import {TbBrandNextjs } from 'react-icons/tb'

const Info = () => {
  return (
    <div>
        <div className="container my-24 mx-auto md:px-6 pt-28">
            <section className="mb-28">
                <div
                className="block rounded-lg bg-slate-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <div className="flex flex-wrap items-center">
                        <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                            <img src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Trendy Pants and Shoes"
                            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"/>
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12 leading-relaxed">
                            <div className="px-6 py-12 md:px-12">
                                <h2 className="mb-4 text-2xl font-bold bg-">
                                What is TechStack?
                                </h2>
                                <p className="mb-6 text-slate-200">
                                A tech stack refers to the combination of technologies, programming languages, frameworks, and tools used to build and operate a website or web application. TechStack provides comprehensive insights and analysis of the tech stacks used by various websites across different industries.
                                </p>
                                <p className="mb-6 text-slate-200">
                                TechStack's team of experts extensively researches and analyzes the underlying technology choices made by popular websites. They delve into the stack architecture, backend and frontend technologies, databases, cloud services, and other components that contribute to the functionality and performance of these websites.
                                </p>
                                <p className="mb-6 text-slate-200">
                                Through the TechStack platform, users can explore detailed profiles of different websites and gain valuable insights into their tech stacks. The platform showcases the tools and technologies adopted by these websites, providing a comprehensive breakdown of each component in their stack.
                                </p>
                                <p className="mb-6 text-slate-200">
                                TechStack aims to help developers, technology enthusiasts, and businesses stay informed about the latest trends, best practices, and popular technologies used by successful websites. By understanding the tech stacks of various websites, users can make informed decisions when selecting technologies for their own projects and gain inspiration from industry leaders.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Info