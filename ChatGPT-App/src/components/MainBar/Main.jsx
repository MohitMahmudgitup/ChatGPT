import React from 'react'
import "./main.css"
import { assets } from '../../assets/assets'
function Main() {
  return (
    <main className='main h-[100vh] overflow-hidden'>
      <nav>
        <p>Gamini</p>
        <img src={assets.user_icon} alt="" />
      </nav>
      <section className='w-[100%] h-[100vh]  relative'>
        <div className='m-auto w-[60vw] h-[70vh]   pt-10 '>
          <h1 className='text-4xl md:text-6xl text-gray-300 font-semibold'>Hello, dev.</h1>
          <h1 className='text-4xl md:text-6xl text-gray-300 mt-2 font-semibold'>How can I help you today?</h1>
          <div className='flex flex-wrap justify-between mt-16'>
            <div className='bg-gray-200 text-sm mt-2 md:mt-0 relative w-[180px] h-[180px] rounded-xl'>
              <p className='pt-4 pl-4 pr-5'>Suggert beautiful places to see on an upcoming road trip.</p>
              <div className='w-10 h-10 flex justify-center items-center absolute bottom-2 right-2 bg-white rounded-full'>
              <img className='w-7' src={assets.compass_icon} alt="" />
              </div>
            </div>
            <div className='bg-gray-200 text-sm mt-2 md:mt-0 relative w-[180px] h-[180px] rounded-xl'>
              <p className='pt-4 pl-4 pr-5'>Brieffy summarize this concept: urban planning</p>
              <div className='w-10 h-10 flex justify-center items-center absolute bottom-2 right-2 bg-white rounded-full'>
              <img className='w-7' src={assets.bulb_icon} alt="" />
              </div>
            </div>
            <div className='bg-gray-200 text-sm mt-2 md:mt-0 relative w-[180px] h-[180px] rounded-xl'>
              <p className='pt-4 pl-4 pr-5'>Brainstorm team bonding activeing for our work retreat</p>
              <div className='w-10 h-10 flex justify-center items-center absolute bottom-2 right-2 bg-white rounded-full'>
              <img className='w-7' src={assets.message_icon} alt="" />
              </div>
            </div>
            <div className='bg-gray-200 text-sm mt-2 md:mt-0 relative w-[180px] h-[180px] rounded-xl'>
              <p className='pt-4 pl-4 pr-5'>Import the readabiltiy of the following code</p>
              <div className='w-10 h-10 flex justify-center items-center absolute bottom-2 right-2 bg-white rounded-full'>
              <img className='w-7' src={assets.code_icon} alt="" />
              </div>
            </div>
          </div>
          <footer>
            <div className="absolute bottom-20 w-[60vw] ">
            <div className='bg-gray-200 flex justify-between rounded-full py-3 px-4 mb-7'>
              <input className="bg-transparent w-full border-none outline-none" type="text " placeholder='Enter a prompt here'/>
              <div className='flex mx-2'>
              <img className='w-7 mx-1 cursor-pointer' src={assets.gallery_icon} alt="" srcset="" />
              <img className='w-7 mx-1 cursor-pointer' src={assets.mic_icon} alt="" srcset="" />
              <img className='w-7 mx-1 cursor-pointer' src={assets.send_icon} alt="" srcset="" />
              </div>
            </div> 
            <p className='text-sm text-center'>Gemini may dispaly inaccurate info. including about people, so double-check its responses.Your privacy and Gemini App.</p>
            </div>
          </footer>          
        </div>
      </section>
    </main>
  )
}

export default Main