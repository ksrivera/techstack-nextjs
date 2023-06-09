

const StockFlow = ({data}) => {
    const date = new Date(data.creation_date * 1000).toDateString() 
    const profile = data.owner.profile_image
    const errorImg = 'https://images.unsplash.com/photo-1526297003708-f5a1c2c9c6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
   //  console.log(date);
  return (
    <>
     <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-8 max-w-md md:max-w-2xl lg:max-w-5xl" key={data.owner.user_id}>
      <div className="flex items-start px-4 py-6">
         <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={profile ? profile : errorImg} alt="avatar"/>
         <div className="">
            <div className="flex items-center justify-between">
               <h2 className="text-lg font-semibold text-gray-900 -mt-1 mx-0 md:text-base"><a href={data.owner.link} target="_blank">{data.owner.display_name}</a></h2>
               <small className="text-sm text-gray-700 ">{date}</small>
            </div>
            <p className="text-gray-700"></p>
            <p className="mt-3 text-gray-700 text-sm w-96 "><a href={data.link} target="_blank">{data.title}</a></p>
            <div className="mt-4 flex items-center">
               <div className="flex text-gray-700 text-sm mr-3">
                  <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                   </svg>
                  <span>12{data.owner.reputation}</span>
               </div>
               <div className="flex mr-2 text-gray-700 text-sm ">
                  <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                  </svg>
                  <span>{data.answer_count}</span>
               </div>
               <div className="flex text-gray-700 text-sm mr-4">
                  <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                   </svg>
                  <span>share</span>
               </div>
            </div>
         </div>
      </div>
   </div>
    </>
  )
}

export default StockFlow