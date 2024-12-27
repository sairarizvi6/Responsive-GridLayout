import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      
      {/* Main Grid Layout */}
      <div className='grid grid-rows-[100px_200px_200px_100px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-black'>
        {/* Header */}
        <div className='bg-purple-600 col-span-1 sm:col-span-2 lg:col-span-3 text-[36px] sm:text-[28px] md:text-[32px] font-bold text-center content-center border-2 border-white'>
          Header
        </div>

        {/* Sidebar */}
        <div className='bg-purple-700 row-span-2 sm:col-span-2 lg:col-span-1 text-[36px] sm:text-[28px] md:text-[32px] font-bold text-center content-center border-2 border-white'>
          SideBar
        </div>

        {/* Content 1 */}
        <div className='bg-purple-600 col-span-1 sm:col-span-1 lg:col-span-2 text-[36px] sm:text-[28px] md:text-[32px] font-bold text-center content-center border-2 border-white'>
          Content-1
        </div>

        {/* Content 2 */}
        <div className='bg-purple-800 col-span-1 sm:col-span-1 lg:col-span-1 text-[36px] sm:text-[28px] md:text-[32px] font-bold text-center content-center border-2 border-white'>
          Content-2
        </div>

        {/* Content 3 */}
        <div className='bg-purple-700 col-span-1 sm:col-span-1 lg:col-span-1 text-[36px] sm:text-[28px] md:text-[32px] font-bold text-center content-center border-2 border-white'>
          Content-3
        </div>

        {/* Footer */}
        <div className='bg-purple-600 col-span-1 sm:col-span-2 lg:col-span-3 text-[36px] sm:text-[28px] md:text-[32px] font-bold text-center content-center border-2 border-white'>
          Footer
        </div>
      </div>
 
    </div>
  )
}

export default Home;